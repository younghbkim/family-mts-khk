// Service Worker - 캐시 없음 (항상 최신 파일 사용)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  // 기존 캐시 전부 삭제
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});
// 네트워크 우선 → 오프라인 fallback 없음 (항상 최신)
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => new Response('오프라인 상태입니다')));
});
