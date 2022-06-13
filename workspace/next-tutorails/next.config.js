/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = {
  images: {
    domains: [
      'd1ilxhx5jmvpvl.cloudfront.net',
      'dn-img-page.kakao.com',
      'image-comic.pstatic.net',
      'kr-a.kakaopagecdn.com',
      'thumb.toomics.com',
      'shtosebzjw.akamaized.net',
      'image.bomtoon.com',
      'ccdn.lezhin.com',
      
    ],
  },
}
