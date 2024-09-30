module.exports = {
    siteUrl: 'https://sato-kazuma.vercel.app',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: ['/'],
                allow: ['/links/'],
            },
        ],
    },
}
