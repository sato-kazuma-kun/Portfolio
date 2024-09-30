import ENV from './env.mjs';

const VARIABLE = {
    ...ENV,
    exclude: Object.freeze(['/manifest.json']),
};

/** @type {import('next-sitemap').IConfig} */
const nextSiteMapConfig = {
    siteUrl: VARIABLE.site, // Base URL
    generateRobotsTxt: true, // Generate robots.txt file
    sitemapSize: 5000, // Limit of URLs per sitemap file (default is 5000)
    exclude: VARIABLE.exclude, // Exclude non-HTML resources
    changefreq: 'daily', // Default change frequency
    priority: 0.7, // Default priority for pages

    additionalPaths: async (config) => [
        await config.transform(config, VARIABLE.routes.portfolio),
        await config.transform(config, VARIABLE.routes.links),
    ],

    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' }, // Allow all agents to crawl the site
        ],
    },
};

export default nextSiteMapConfig;