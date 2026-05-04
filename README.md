# 가족 자산 현황 PWA

구글시트 연동 가족 자산 운용 현황 모바일 앱

## GitHub 업로드 파일 목록
- `index.html` — 앱 메인 화면
- `manifest.json` — PWA 설정
- `sw.js` — 오프라인 캐시 (Service Worker)
- `icons/icon-192.png` — 앱 아이콘
- `icons/icon-512.png` — 앱 아이콘

## ⚠️ 배포 전 필수 작업
`index.html` 내 GAS_URL을 Apps Script 배포 URL로 교체:
```
const GAS_URL = 'https://script.google.com/macros/s/여기에입력/exec';
```

## 모바일 설치
- iOS Safari: 공유 → 홈 화면에 추가
- Android Chrome: 메뉴 → 앱 설치
