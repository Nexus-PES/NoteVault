/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl:  process.env.SITE_URL,
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    exclude: ['/demo', '/test'],
}