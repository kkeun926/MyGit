import { withImageProxy } from "@blazity/next-image-proxy";

export default withImageProxy({
  whitelistedPatterns: [
    /^https?:\/\/(.*).dog.ceo/,
    /^https?:\/\/(.*).cloudfront.net/,
    /^https?:\/\/(.*).pstatic.net/,
    /^https?:\/\/(.*).kakao.com/,
    /^https?:\/\/(.*).kakaopagecdn.com/,
    /^https?:\/\/(.*).lezhin.com/,
    /^https?:\/\/(.*).toomics.com/,
    /^https?:\/\/(.*).akamaized.net/,
    /^https?:\/\/(.*).bomtoon.com/,
  ],
});
