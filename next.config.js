const env = process.env.NODE_ENV;
const isDev = env === 'development';

module.exports = {
  future: {
    webpack5: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'User-Agent',
            value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0'
          }
        ],
        destination: 'https://google.com',
        permanent: true
      }
    ]
  }
}
