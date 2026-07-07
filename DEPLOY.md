# HTML 공유 배포

이 프로젝트는 가계부의 정적 리포트와 같은 계열의 방식으로 공유합니다.
ETF 정보는 공개 자료이므로 별도 암호화 없이 GitHub Pages에 올릴 수 있습니다.

## 현재 공개 주소

https://dogok2.github.io/stock-etf-analyzer/

원격 저장소는 `https://github.com/dogok2/stock-etf-analyzer`입니다.

## 1. GitHub 저장소 연결

GitHub에서 빈 저장소를 만든 뒤 이 폴더에서 실행합니다.

```powershell
git add index.html styles.css app.js data README.md DEPLOY.md
git commit -m "Create ETF analysis report"
git remote add origin https://github.com/사용자명/저장소명.git
git push -u origin master
```

현재 프로젝트에는 위 원격 저장소가 연결되어 있습니다.

## 2. GitHub Pages 켜기

1. 저장소의 `Settings` → `Pages`로 이동합니다.
2. `Deploy from a branch`를 선택합니다.
3. 브랜치는 `master`, 폴더는 `/ (root)`를 선택하고 저장합니다.
4. 잠시 후 표시되는 `https://사용자명.github.io/저장소명/` 주소를 공유합니다.

## 3. ETF 분석 추가 후 반영

새 분석을 추가한 뒤 아래처럼 같은 주소에 갱신합니다.

```powershell
git add data/etfs.js
git commit -m "Add ETF analysis"
git push
```

공개 저장소에는 개인 메모, 계좌번호, 보유수량, 매수가 같은 개인 투자정보를 넣지 않는 것이 안전합니다.
