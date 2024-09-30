/** @type {import('next-sitemap').IConfig} */
const nextSiteMapConfig = {
    siteUrl: 'https://sato-kazuma.vercel.app', // Your base URL
    generateRobotsTxt: true, // Generate robots.txt file
    sitemapSize: 5000, // Limit of URLs per sitemap file (default is 5000)
    exclude: ['/manifest.json'], // Exclude non-HTML resources
    changefreq: 'daily', // Default change frequency
    priority: 0.7, // Default priority for pages
    additionalPaths: async (config) => [
        await config.transform(config, '/'),
        await config.transform(config, '/links'),
    ],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' }, // Allow all agents to crawl the site
        ],
    },
};

export default nextSiteMapConfig;