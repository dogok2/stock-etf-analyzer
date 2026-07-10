(() => {
  const config = window.REQUEST_BOARD_CONFIG || {};
  const root = document.querySelector("#chat-root");
  const statusPill = document.querySelector("#chat-status-pill");
  if (!root) return;

  const state = {
    requests: [],
    loading: false,
    error: "",
    adminToken: readAdminToken(),
    configured: Boolean(config.supabaseUrl && config.anonKey && config.table)
  };

  const randomWords = [
    "민트", "라임", "고래", "달빛", "호두", "새벽", "파도", "구름",
    "감자", "토끼", "펭귄", "복숭아", "메모", "나침반", "별빛", "커피"
  ];

  function render() {
    updateStatusPill();
    root.innerHTML = `
      <header class="chat-hero-panel">
        <div>
          <div class="report-badges">
            <span class="badge accent">ANONYMOUS</span>
            <span class="badge">매번 랜덤 이름</span>
            <span class="badge">분석 요청 전용</span>
          </div>
          <h3>친구들이 남기는 분석 후보함</h3>
          <p>ETF나 주식 이름, 궁금한 이유, 봐줬으면 하는 포인트를 남기면 운영자가 보고 분석 여부를 정합니다. 이름은 받지 않고, 댓글마다 새 랜덤 익명명이 붙습니다.</p>
        </div>
        <aside class="chat-rule-card">
          <small>가이드</small>
          <ol>
            <li>ETF/주식 이름이나 티커를 적어주세요.</li>
            <li>왜 궁금한지 한 줄이라도 남겨주세요.</li>
            <li>개인정보나 계좌 정보는 적지 마세요.</li>
          </ol>
        </aside>
      </header>
      <div class="chat-body">
        ${renderSetupNotice()}
        <section class="chat-compose-card">
          <div class="chat-card-head">
            <div>
              <p class="eyebrow">REQUEST</p>
              <h3>분석 요청 남기기</h3>
            </div>
            <span class="chat-anon-preview" data-anon-preview>${escapeHtml(makeAnonName())}</span>
          </div>
          <form id="request-form" class="request-form">
            <div class="request-form-grid">
              <label>
                <span>분류</span>
                <select name="assetType" ${state.configured ? "" : "disabled"}>
                  <option value="ETF">ETF</option>
                  <option value="주식">주식</option>
                  <option value="기타">기타</option>
                </select>
              </label>
              <label>
                <span>종목명 / 티커</span>
                <input name="assetName" type="text" maxlength="80" placeholder="예: KODEX 차이나휴머노이드로봇, TLT, META" ${state.configured ? "" : "disabled"} required />
              </label>
            </div>
            <label>
              <span>요청 내용</span>
              <textarea name="message" maxlength="${maxMessageLength()}" placeholder="왜 궁금한지, 어떤 포인트를 봐줬으면 하는지 적어주세요." ${state.configured ? "" : "disabled"} required></textarea>
            </label>
            <div class="request-form-foot">
              <small>등록할 때마다 익명 이름은 새로 생성됩니다. 같은 사람이 남겨도 같은 ID로 묶지 않습니다.</small>
              <button type="submit" ${state.configured ? "" : "disabled"}>익명으로 남기기</button>
            </div>
          </form>
        </section>
        <section class="chat-admin-card">
          <div>
            <p class="eyebrow">OWNER</p>
            <h3>관리자 삭제</h3>
            <p>Supabase Auth/RLS를 설정하면 관리자만 댓글을 삭제할 수 있습니다. 설정 전에도 Supabase 대시보드에서는 직접 삭제할 수 있습니다.</p>
          </div>
          <form id="admin-form" class="admin-form">
            <input name="email" type="email" placeholder="관리자 이메일로 로그인 링크 받기" ${state.configured ? "" : "disabled"} />
            <button type="submit" ${state.configured ? "" : "disabled"}>로그인 링크 보내기</button>
          </form>
          <div class="admin-actions">
            <button type="button" id="admin-logout" ${state.adminToken ? "" : "disabled"}>관리자 로그아웃</button>
            ${config.dashboardUrl ? `<a href="${escapeAttr(config.dashboardUrl)}" target="_blank" rel="noreferrer">Supabase 대시보드</a>` : ""}
          </div>
          <p class="admin-state">${state.adminToken ? "관리자 세션이 감지되었습니다. 삭제 버튼이 활성화됩니다." : "관리자 삭제 버튼은 로그인 후 표시됩니다."}</p>
        </section>
        <section class="request-list-shell">
          <div class="chat-card-head">
            <div>
              <p class="eyebrow">INBOX</p>
              <h3>요청 목록</h3>
            </div>
            <button type="button" id="refresh-requests" ${state.configured ? "" : "disabled"}>새로고침</button>
          </div>
          <div id="request-list" class="request-list">
            ${renderRequestList()}
          </div>
        </section>
      </div>`;

    bindEvents();
  }

  function renderSetupNotice() {
    if (state.configured) {
      return state.error ? `<div class="chat-warning"><strong>연결 오류</strong><p>${escapeHtml(state.error)}</p></div>` : "";
    }

    return `<div class="chat-warning">
      <strong>댓글 저장소 연결이 아직 필요합니다.</strong>
      <p>GitHub Pages만으로는 방문자 댓글을 저장할 수 없어서 Supabase 연결값을 넣어야 실제 등록이 됩니다. 아래 UI는 준비되어 있고, <code>data/request-board-config.js</code>에 Supabase URL과 anon key를 넣으면 공개 댓글함으로 작동합니다.</p>
      <p>DB 테이블과 삭제 권한 설정 SQL은 <code>${escapeHtml(config.setupGuideUrl || "docs/supabase-analysis-requests.sql")}</code>에 넣어뒀습니다.</p>
    </div>`;
  }

  function renderRequestList() {
    if (!state.configured) {
      return `<div class="request-empty">
        <strong>설정 대기 중</strong>
        <p>Supabase 연결 후 지인들이 남긴 요청이 여기에 최신순으로 표시됩니다.</p>
      </div>`;
    }

    if (state.loading) {
      return `<div class="request-empty"><strong>불러오는 중</strong><p>요청 목록을 가져오고 있습니다.</p></div>`;
    }

    if (state.error) {
      return `<div class="request-empty"><strong>목록을 불러오지 못했습니다.</strong><p>${escapeHtml(state.error)}</p></div>`;
    }

    if (!state.requests.length) {
      return `<div class="request-empty"><strong>아직 요청이 없습니다.</strong><p>첫 요청이 남겨지면 여기에 표시됩니다.</p></div>`;
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
          <span>${statusLabel(item.status)}</span>
          ${state.adminToken ? `<button type="button" data-delete-request="${escapeAttr(item.id)}">삭제</button>` : ""}
        </div>
      </article>`)
      .join("");
  }

  function bindEvents() {
    const form = root.querySelector("#request-form");
    const adminForm = root.querySelector("#admin-form");
    const refreshButton = root.querySelector("#refresh-requests");
    const logoutButton = root.querySelector("#admin-logout");

    form?.addEventListener("submit", handleSubmit);
    adminForm?.addEventListener("submit", handleAdminLogin);
    refreshButton?.addEventListener("click", loadRequests);
    logoutButton?.addEventListener("click", () => {
      sessionStorage.removeItem("requestBoardAdminToken");
      state.adminToken = "";
      render();
    });

    root.querySelectorAll("[data-delete-request]").forEach((button) => {
      button.addEventListener("click", () => deleteRequest(button.dataset.deleteRequest));
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!state.configured) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const assetName = String(formData.get("assetName") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const assetType = String(formData.get("assetType") || "ETF").trim();

    if (!assetName || !message) {
      setError("종목명과 요청 내용을 모두 적어주세요.");
      return;
    }

    if (message.length > maxMessageLength()) {
      setError(`요청 내용은 ${maxMessageLength()}자 이하로 적어주세요.`);
      return;
    }

    const anonName = makeAnonName();
    setLoading(true);
    try {
      await supabaseFetch(`/${tableName()}`, {
        method: "POST",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify({
          anon_name: anonName,
          asset_type: assetType,
          asset_name: assetName,
          message,
          status: "new",
          hidden: false
        })
      });
      form.reset();
      await loadRequests();
    } catch (error) {
      setError(error.message || "요청 등록에 실패했습니다.");
      setLoading(false);
      render();
    }
  }

  async function handleAdminLogin(event) {
    event.preventDefault();
    if (!state.configured) return;

    const email = String(new FormData(event.currentTarget).get("email") || "").trim();
    if (!email) {
      setError("관리자 이메일을 입력해주세요.");
      return;
    }

    try {
      const redirectTo = location.href.split("#")[0];
      await authFetch("/otp", {
        method: "POST",
        body: JSON.stringify({
          email,
          create_user: false,
          options: { email_redirect_to: redirectTo }
        })
      });
      setError("로그인 링크를 보냈습니다. 메일의 링크를 열면 관리자 세션이 적용됩니다.");
    } catch (error) {
      setError(error.message || "로그인 링크 전송에 실패했습니다. Supabase Auth 설정을 확인해주세요.");
    }
    render();
  }

  async function deleteRequest(id) {
    if (!id || !state.adminToken) return;
    if (!window.confirm("이 요청을 삭제할까요? 삭제 후에는 목록에서 사라집니다.")) return;

    setLoading(true);
    try {
      await supabaseFetch(`/${tableName()}?id=eq.${encodeURIComponent(id)}`, {
        method: "DELETE"
      }, state.adminToken);
      await loadRequests();
    } catch (error) {
      setError(error.message || "삭제에 실패했습니다. 관리자 RLS 정책을 확인해주세요.");
      setLoading(false);
      render();
    }
  }

  async function loadRequests() {
    if (!state.configured) {
      render();
      return;
    }

    setLoading(true, false);
    try {
      const rows = await supabaseFetch(
        `/${tableName()}?select=id,created_at,anon_name,asset_type,asset_name,message,status&hidden=eq.false&order=created_at.desc&limit=${pageSize()}`
      );
      state.requests = Array.isArray(rows) ? rows : [];
      state.error = "";
    } catch (error) {
      state.error = error.message || "요청 목록을 불러오지 못했습니다.";
    } finally {
      state.loading = false;
      render();
    }
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

  async function authFetch(path, options = {}) {
    const response = await fetch(`${trimSlash(config.supabaseUrl)}/auth/v1${path}`, {
      ...options,
      headers: {
        apikey: config.anonKey,
        "Content-Type": "application/json",
        ...(options.headers || {})
      }
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(toReadableError(text, response.status));
    }

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

  function updateStatusPill() {
    if (!statusPill) return;
    statusPill.textContent = state.configured
      ? state.adminToken
        ? "관리자 모드"
        : "댓글 저장 연결됨"
      : "DB 연결 필요";
    statusPill.classList.toggle("connected", state.configured);
    statusPill.classList.toggle("admin", Boolean(state.adminToken));
  }

  function makeAnonName() {
    const word = randomWords[Math.floor(Math.random() * randomWords.length)];
    const number = Math.floor(1000 + Math.random() * 9000);
    return `익명-${word}-${number}`;
  }

  function setLoading(value, rerender = true) {
    state.loading = value;
    if (value) state.error = "";
    if (rerender) render();
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

  function trimSlash(value) {
    return String(value || "").replace(/\/+$/, "");
  }

  function statusLabel(status) {
    return ({ new: "새 요청", reviewing: "검토 중", done: "분석 완료", skipped: "보류" })[status] || "새 요청";
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
