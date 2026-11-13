self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

// Keep each launch on the live build so assets from different releases never mix.
self.addEventListener('fetch', event => {
    if (event.request.mode !== 'navigate') return;
    event.respondWith(fetch(event.request).catch(() => new Response(
        '<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">' +
        '<title>Pizza Fish Taco</title><body style="margin:12vh 8vw;background:#110c21;color:#fff0d0;font:18px system-ui">' +
        '<h1>Pizza Fish Taco</h1><p>Check your internet connection and try again.</p>' +
        '<a href="./" style="color:#ffaecc">Try again</a></body>',
        { headers: { 'Content-Type': 'text/html; charset=utf-8' } },
    )));
});
