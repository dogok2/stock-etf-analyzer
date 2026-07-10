(() => {
  const config = window.REQUEST_BOARD_CONFIG || {};
  const root = document.querySelector("#chat-root");
  const statusPill = document.querySelector("#chat-status-pill");
  if (!root) return;

  const storageKey = "deepTicker.analysisRequests.v1";
  const retentionDays = Number(config.retentionDays) || 7;
  const configured = Boolean(config.supabaseUrl && config.anonKey && config.table);
  const state = {
    requests: [],
    loading: false,
    error: "",
    adminToken: readAdminToken()
  };

  const randomWords = [
    "민트", "라임", "고래", "달빛", "호두", "새벽", "파도", "구름",
    "감자", "토끼", "펭귄", "복숭아", "메모", "나침반", "별빛", "커피"
  ];

  function render() {
    updateStatusPill();
    root.innerHTML = `
      <div class="chat-simple-board">
        <section class="chat-compose-card">
          <div class="chat-card-head">
            <div>
              <p class="eyebrow">REQUEST</p>
              <h3>분석 요청 남기기</h3>
            </div>
            <span class="chat-anon-preview">${escapeHtml(makeAnonName())}</span>
          </div>
          <form id="request-form" class="request-form">
            <div class="request-form-grid">
              <label>
                <span>분류</span>
                <select name="assetType">
                  <option value="ETF">ETF</option>
                  <option value="주식">주식</option>
                  <option value="기타">기타</option>
                </select>
              </label>
              <label>
                <span>종목명 / 티커</span>
                <input name="assetName" type="text" maxlength="80" placeholder="예: TIGER 미국배당다우존스, TLT, META" required />
              </label>
            </div>
            <label>
              <span>요청 내용</span>
              <textarea name="message" maxlength="${maxMessageLength()}" placeholder="분석해줬으면 하는 이유나 궁금한 포인트를 적어주세요." required></textarea>
            </label>
            <div class="request-form-foot">
              <small>댓글마다 새 랜덤 익명 이름이 붙고, ${retentionDays}일이 지나면 목록에서 사라집니다.</small>
              <button type="submit">익명으로 남기기</button>
            </div>
          </form>
          ${renderModeNote()}
          ${state.error ? `<p class="chat-inline-error">${escapeHtml(state.error)}</p>` : ""}
        </section>
        <section class="request-list-shell">
          <div class="chat-card-head">
            <div>
              <p class="eyebrow">COMMENTS</p>
              <h3>최근 요청</h3>
            </div>
            <button type="button" id="refresh-requests">새로고침</button>
          </div>
          <div id="request-list" class="request-list">
            ${renderRequestList()}
          </div>
        </section>
      </div>`;

    bindEvents();
  }

  function renderModeNote() {
    if (configured) return "";
    return `<p class="chat-local-note">현재는 이 브라우저에만 임시 저장됩니다. 공개 방문자들의 요청을 한곳에서 모으려면 나중에 저장소 연결이 필요합니다.</p>`;
  }

  function renderRequestList() {
    if (state.loading) {
      return `<div class="request-empty"><strong>불러오는 중</strong><p>요청 목록을 정리하고 있습니다.</p></div>`;
    }

    if (!state.requests.length) {
      return `<div class="request-empty"><strong>아직 요청이 없습니다.</strong><p>ETF나 주식 이름을 남기면 여기에 댓글처럼 쌓입니다.</p></div>`;
    }

    return state.requests
      .map((item) => `<article class="request-item" data-request-id="${escapeAttr(item.id)}">
        <div class="request-item-head">
          <span class="request-anon">${escapeHtml(item.anon_name)}</span>
          <small>${formatDate(item.created_at)}</small>
        </div>
        <div class="request-target">
          <span>${escapeHtml(item.asset_type)}</span>
          <strong>${escapeHtml(item.asset_name)}</strong>
        </div>
        <p>${escapeHtml(item.message)}</p>
        <div class="request-item-foot">
          <span>${daysLeftLabel(item.expires_at)}</span>
          ${canDelete() ? `<button type="button" data-delete-request="${escapeAttr(item.id)}">삭제</button>` : ""}
        </div>
      </article>`)
      .join("");
  }

  function bindEvents() {
    root.querySelector("#request-form")?.addEventListener("submit", handleSubmit);
    root.querySelector("#refresh-requests")?.addEventListener("click", loadRequests);
    root.querySelectorAll("[data-delete-request]").forEach((button) => {
      button.addEventListener("click", () => deleteRequest(button.dataset.deleteRequest));
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const assetName = String(formData.get("assetName") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const assetType = String(formData.get("assetType") || "ETF").trim();

    if (!assetName || !message) {
      setError("종목명과 요청 내용을 모두 적어주세요.");
      render();
      return;
    }

    if (message.length > maxMessageLength()) {
      setError(`요청 내용은 ${maxMessageLength()}자 이하로 적어주세요.`);
      render();
      return;
    }

    const now = new Date();
    const request = {
      id: crypto.randomUUID ? crypto.randomUUID() : `request-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      created_at: now.toISOString(),
      expires_at: addDays(now, retentionDays).toISOString(),
      anon_name: makeAnonName(),
      asset_type: assetType,
      asset_name: assetName,
      message,
      status: "new",
      hidden: false
    };

    state.loading = true;
    state.error = "";
    render();

    try {
      if (configured) {
        await supabaseFetch(`/${tableName()}`, {
          method: "POST",
          headers: { Prefer: "return=minimal" },
          body: JSON.stringify(request)
        });
      } else {
        saveLocalRequests([request, ...readLocalRequests()]);
      }

      form.reset();
      await loadRequests();
    } catch (error) {
      state.error = error.message || "요청 등록에 실패했습니다.";
      state.loading = false;
      render();
    }
  }

  async function loadRequests() {
    state.loading = true;
    state.error = "";
    render();

    try {
      if (configured) {
        const cutoff = encodeURIComponent(new Date(Date.now() - retentionDays * 24 * 60 * 60 * 1000).toISOString());
        const rows = await supabaseFetch(
          `/${tableName()}?select=id,created_at,expires_at,anon_name,asset_type,asset_name,message,status&hidden=eq.false&created_at=gte.${cutoff}&order=created_at.desc&limit=${pageSize()}`
        );
        state.requests = pruneExpired(Array.isArray(rows) ? rows : []);
      } else {
        const rows = pruneExpired(readLocalRequests());
        saveLocalRequests(rows);
        state.requests = rows;
      }
    } catch (error) {
      state.error = error.message || "요청 목록을 불러오지 못했습니다.";
    } finally {
      state.loading = false;
      render();
    }
  }

  async function deleteRequest(id) {
    if (!id) return;
    if (!window.confirm("이 요청을 삭제할까요?")) return;

    state.loading = true;
    render();

    try {
      if (configured && state.adminToken) {
        await supabaseFetch(`/${tableName()}?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" }, state.adminToken);
      } else if (!configured) {
        saveLocalRequests(readLocalRequests().filter((item) => item.id !== id));
      }
      await loadRequests();
    } catch (error) {
      state.error = error.message || "삭제에 실패했습니다.";
      state.loading = false;
      render();
    }
  }

  function readLocalRequests() {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch {
      return [];
    }
  }

  function saveLocalRequests(requests) {
    localStorage.setItem(storageKey, JSON.stringify(pruneExpired(requests).slice(0, pageSize())));
  }

  function pruneExpired(requests) {
    const now = Date.now();
    return requests
      .filter((item) => !item.hidden)
      .filter((item) => {
        const expires = item.expires_at ? new Date(item.expires_at).getTime() : addDays(new Date(item.created_at || Date.now()), retentionDays).getTime();
        return Number.isFinite(expires) && expires > now;
      })
      .sort((a, b) => String(b.created_at).localeCompare(String(a.created_at)));
  }

  async function supabaseFetch(path, options = {}, token = "") {
    const response = await fetch(`${trimSlash(config.supabaseUrl)}/rest/v1${path}`, {
      ...options,
      headers: {
        apikey: config.anonKey,
        Authorization: `Bearer ${token || config.anonKey}`,
        "Content-Type": "application/json",
        ...(options.headers || {})
      }
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(toReadableError(text, response.status));
    }

    if (response.status === 204) return null;
    const text = await response.text();
    return text ? JSON.parse(text) : null;
  }

  function parseAdminTokenFromHash() {
    if (!location.hash.includes("access_token")) return;
    const params = new URLSearchParams(location.hash.slice(1));
    const token = params.get("access_token");
    if (token) {
      sessionStorage.setItem("requestBoardAdminToken", token);
      state.adminToken = token;
      history.replaceState(null, "", location.pathname + location.search);
    }
  }

  function readAdminToken() {
    try {
      return sessionStorage.getItem("requestBoardAdminToken") || "";
    } catch {
      return "";
    }
  }

  function canDelete() {
    return !configured || Boolean(state.adminToken);
  }

  function updateStatusPill() {
    if (!statusPill) return;
    statusPill.textContent = `${retentionDays}일 보관`;
    statusPill.classList.add("connected");
    statusPill.classList.toggle("admin", Boolean(state.adminToken));
  }

  function makeAnonName() {
    const word = randomWords[Math.floor(Math.random() * randomWords.length)];
    const number = Math.floor(1000 + Math.random() * 9000);
    return `익명-${word}-${number}`;
  }

  function setError(message) {
    state.error = message;
  }

  function maxMessageLength() {
    return Number(config.maxMessageLength) || 700;
  }

  function pageSize() {
    return Number(config.pageSize) || 80;
  }

  function tableName() {
    return encodeURIComponent(config.table || "analysis_requests");
  }

  function addDays(date, days) {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  }

  function trimSlash(value) {
    return String(value || "").replace(/\/+$/, "");
  }

  function daysLeftLabel(expiresAt) {
    if (!expiresAt) return `${retentionDays}일 보관`;
    const diff = new Date(expiresAt).getTime() - Date.now();
    const days = Math.max(0, Math.ceil(diff / (24 * 60 * 60 * 1000)));
    return days <= 1 ? "오늘 사라짐" : `${days}일 뒤 사라짐`;
  }

  function formatDate(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString("ko-KR", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function toReadableError(text, status) {
    try {
      const parsed = JSON.parse(text);
      return parsed.message || parsed.error_description || parsed.error || `요청 실패 (${status})`;
    } catch {
      return text || `요청 실패 (${status})`;
    }
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }

  parseAdminTokenFromHash();
  render();
  loadRequests();
})();
