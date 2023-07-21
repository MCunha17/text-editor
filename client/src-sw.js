const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

// Precache and route the files specified in the __WB_MANIFEST variable
precacheAndRoute(self.__WB_MANIFEST);

// Create a CacheFirst strategy for caching and serving page requests
const pageCache = new CacheFirst({
	cacheName: 'page-cache',
	plugins: [
		// Plugin to cache responses with a status of 0 or 200
		new CacheableResponsePlugin({
			statuses: [0, 200],
		}),
		// Plugin to set an expiration time for cached responses
		new ExpirationPlugin({
			maxAgeSeconds: 30 * 24 * 60 * 60,
		}),
	],
});

// Warm up the page cache by pre-caching specific URLs
warmStrategyCache({
	urls: ['/index.html', '/'],
	strategy: pageCache,
});

// Register a route for handling navigation requests and use the pageCache strategy
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Register a route for caching and serving assets (images)
registerRoute(
	({ request }) => request.destination === 'image',
	new CacheFirst({
		cacheName: 'assets',
		plugins: [
			// Plugin to cache responses with a status of 0 or 200
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
			// Plugin to set an expiration time and maximum number of entries for cached responses
			new ExpirationPlugin({
				maxEntries: 60, // Maximum number of entries in the cache
				maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
			}),
		],
	})
);