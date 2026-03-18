// Service Worker - وحدة IT
const CACHE_NAME = 'it-unit-v1';
const APP_URL = 'https://script.google.com/macros/s/AKfycbw4kiRnpa1vvqJKWQk5lNLCpdcy9wNjA7d_hkZOnB9EMIqHjbfvGcSvzVbbwKyJqNRj/exec';

self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Let all requests pass through normally (app is online-based)
  event.respondWith(fetch(event.request).catch(() => {
    return new Response(
      `<!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>لا يوجد اتصال</title>
        <style>
          body { font-family: 'Cairo', sans-serif; background: #0a1628; color: #f5f0e8;
                 display: flex; align-items: center; justify-content: center;
                 min-height: 100vh; margin: 0; text-align: center; direction: rtl; }
          .box { padding: 40px; }
          .icon { font-size: 64px; margin-bottom: 20px; }
          h1 { color: #c9a84c; font-size: 22px; margin-bottom: 12px; }
          p { color: #6b7a99; font-size: 14px; margin-bottom: 24px; }
          button { background: #c9a84c; color: #0a1628; border: none; border-radius: 10px;
                   padding: 12px 28px; font-size: 15px; font-family: 'Cairo', sans-serif;
                   cursor: pointer; font-weight: 700; }
        </style>
      </head>
      <body>
        <div class="box">
          <div class="icon">📡</div>
          <h1>لا يوجد اتصال بالإنترنت</h1>
          <p>يرجى التحقق من اتصالك بالإنترنت وإعادة المحاولة</p>
          <button onclick="location.reload()">إعادة المحاولة</button>
        </div>
      </body>
      </html>`,
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }));
});
