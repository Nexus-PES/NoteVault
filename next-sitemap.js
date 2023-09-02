module.exports = {
    siteUrl:  process.env.SITE_URL,
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