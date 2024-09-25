import withPWAInit from "@ducanh2912/next-pwa";

// Define the PWA configuration options
const withPWA = withPWAInit({
    dest: "public",
    workboxOptions: {
        runtimeCaching: [
            {
                urlPattern: ({ url }) => url.pathname.startsWith('/assets/') || url.pathname.startsWith('/icons/'),
                handler: 'CacheFirst',
                options: {
                    cacheName: 'assets-cache',
                    expiration: {
                        maxEntries: 100,
                        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
                    },
                },
            }
        ]
    }
});

// Export the combined Next.js and PWA configuration
const nextConfig = {
    // Other Next.js config can be added here
};

export default withPWA(nextConfig);
