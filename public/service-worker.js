importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'document',
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'script' || request.destination === 'style',
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'font',
  new workbox.strategies.CacheFirst()
);

// Optionally, you can precache specific files or URLs when the service worker is installed.
// Replace 'your-files-to-precache' with an array of URLs you want to precache.
workbox.precaching.precacheAndRoute([
  'https://kazuma-kun-portfolio.vercel.app',
]);

// Add any additional routes you want to cache for offline use.
