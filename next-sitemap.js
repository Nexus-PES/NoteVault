const { userAgent } = require("next/server");

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
    siteUrl: dev ? 'https://localhost:3000' : process.env.SITE_URL,
    generateRobotsTxt: true,
    robotsTxtOptions: [
        {userAgent: '*', allow: '/'},
        {userAgent: '*', disallow: '/demo'},
        {userAgent: '*', disallow: '/test'},
],
    sitemapSize: 7000,
    changefreq: 'daily',
    exclude: ['/demo', '/test'],
}