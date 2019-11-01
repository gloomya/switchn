var cacheName = 'switchn';
var filesToCache = [
    '/',
    '/index.html',
    '/login.html',
    // '/favicon.ico',
    'css/style.css',
    // 'css/animate.css',
    // 'css/bootstrap.min.css',
    // 'css/dark.css',
    // 'css/LineIcons.min.css',
    // 'js/LineIcons.min.css',
    // 'js/bootstrap.min.js',
    // 'js/jquery-3.4.1.js',
    // 'js/jquery.easing.min.js',
    // 'js/jquery.nav.js',
    // 'js/jquery.slicknav.js',
    // 'js/scrolling-nav.js',
    // 'js/wow.js',
    'js/main.js'
    // 'fonts/LineIcons.eot',
    // 'fonts/LineIcons.svg',
    // 'fonts/LineIcons.ttf',
    // 'fonts/LineIcons.woff',
    // 'img/android-chrome-192x192.png',
    // 'img/android-chrome-512x512.png',
    // 'img/apple-touch-icon.png',
    // 'img/bike.svg',
    // 'img/favicon-16x16.png',
    // 'img/favicon-32x32.png',
    // 'img/feature-1.svg',
    // 'img/feature-2.svg',
    // 'img/feature-3.svg',
    // 'img/gear.svg',
    // 'img/headphones-2.jpg',
    // 'img/headphones.jpg',
    // 'img/hero-bg.jpg',
    // 'img/icon_128x128.png',
    // 'img/icon-256x256.png',
    // 'img/icon_512x512.png',
    // 'img/man.svg',
    // 'img/mstile-150x150.png',
    // 'img/playlist-manager.svg',
    // 'img/rocket.svg',
    // 'img/team-1.jpg',
    // 'img/team-2.jpg',
    // 'img/team-3.jpg',
    // 'img/team-4.jpg'
];

// Start the service worker and cache all of the app's content

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

// Serve cached content when offline

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});