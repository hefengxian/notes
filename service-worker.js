/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0ae12d5ea9c7b6836e69d5d6239af9df"
  },
  {
    "url": "about.html",
    "revision": "7a7192b882bb22c421148de4cf8666d6"
  },
  {
    "url": "assets/css/0.styles.b0162d90.css",
    "revision": "0c527ded5439d121231eb440c495fb50"
  },
  {
    "url": "assets/fonts/DIN-Regular.otf",
    "revision": "ecb27f891b22d93bb1943efce5502b21"
  },
  {
    "url": "assets/fonts/zzgfyhr.otf",
    "revision": "ff6d60a2d14f9d8a61f5aa14805f7d81"
  },
  {
    "url": "assets/icons/icon-128x128.png",
    "revision": "a9c2b2ef8442fecc611e8d1e8f0e369e"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "bc2a2a19ec0969941084f4992b1626cd"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "34fcdc105950dd05ea04e591c58c7e3a"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "4b80ed9ac1c22d57a8f895ae29575f2c"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "e322f199d127d7eeba913f67d0fdb16c"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "c63aef0638fe788b22cedebdd7c13ee6"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "4ca47621d69bbe9c61b9770e48bec6cb"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "85eaeba3e10038b01ca708168d68daa1"
  },
  {
    "url": "assets/img/how-2-take-note-mind-map.e21bd960.png",
    "revision": "e21bd9606c24cd5bc5c71a0f7deb04f2"
  },
  {
    "url": "assets/img/logo-round.png",
    "revision": "66fa78445787d9ca9f414c302d1a9994"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "ae1f3fd799959ec471e16ca6873a58f6"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "d7644cc90dce20be5833ee765aae9205"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.39fb17f7.js",
    "revision": "488b10894938abea387e1fef472ab2f6"
  },
  {
    "url": "assets/js/11.db402a96.js",
    "revision": "0c0b23896ed55d1eab2b67e99b1da6ff"
  },
  {
    "url": "assets/js/12.ea8d3e4f.js",
    "revision": "d28a179539fa0475aff8e1156a1c5bec"
  },
  {
    "url": "assets/js/13.d7a32ca2.js",
    "revision": "e458556870a41e339726da1bf8c7ea6c"
  },
  {
    "url": "assets/js/14.298f4872.js",
    "revision": "55d4cb02ae4bc3c72e62fcda520ef0e6"
  },
  {
    "url": "assets/js/15.3f03ad98.js",
    "revision": "c78ea7e362bc93bee6350c564827a4b6"
  },
  {
    "url": "assets/js/16.4857e21c.js",
    "revision": "8a3c145819ef47e16d13b505f0224ce4"
  },
  {
    "url": "assets/js/17.3b71bbfa.js",
    "revision": "946df5ca4f53afb8db7125839de56ce6"
  },
  {
    "url": "assets/js/18.a3f96746.js",
    "revision": "73905da29b9486a67471ffef1a95b72b"
  },
  {
    "url": "assets/js/19.5de96238.js",
    "revision": "0148461e33103355d8b05f27ca65bbc0"
  },
  {
    "url": "assets/js/20.f5d60362.js",
    "revision": "3b3b8d4405b10e05762791726101a938"
  },
  {
    "url": "assets/js/21.afd58efb.js",
    "revision": "f3260632df4fbd9d08330cb03943e831"
  },
  {
    "url": "assets/js/22.0ffbdbf6.js",
    "revision": "7b11d3b0698765b0a0028bc11606aed2"
  },
  {
    "url": "assets/js/23.3cef561f.js",
    "revision": "b3e4f55b41331ccb8a7e17c68424f86a"
  },
  {
    "url": "assets/js/24.20c8353a.js",
    "revision": "866e7538a2c67d6f0f356fb4d2a7e284"
  },
  {
    "url": "assets/js/25.7f1dd85d.js",
    "revision": "91a4f628492dc0394a239a96ee82f9c3"
  },
  {
    "url": "assets/js/26.6b2b55e3.js",
    "revision": "b124121161f22a32cd0c5837a62deeda"
  },
  {
    "url": "assets/js/27.0de335cf.js",
    "revision": "02e55c47ace0e9a8b82acc92d3ebb76d"
  },
  {
    "url": "assets/js/28.abb844d7.js",
    "revision": "bfd2ee245958241992e1550027bcb494"
  },
  {
    "url": "assets/js/29.3cb5bf75.js",
    "revision": "9d3302af18b78603616127dfeaa73cf2"
  },
  {
    "url": "assets/js/3.8f708b12.js",
    "revision": "b97ab2179d9b7936742de8afcbbbaa25"
  },
  {
    "url": "assets/js/30.6dcd6c45.js",
    "revision": "877ab5d7d5ac508c3c3d99145437e287"
  },
  {
    "url": "assets/js/4.bb659c78.js",
    "revision": "99761f7d3503c23c516ed9725ce513b4"
  },
  {
    "url": "assets/js/5.dad84c33.js",
    "revision": "80fb54d3af56bc24bb09754bb1a28f00"
  },
  {
    "url": "assets/js/6.d2a52d26.js",
    "revision": "4d6054607937a0aea0d9edd210fb0a4f"
  },
  {
    "url": "assets/js/7.c9e49557.js",
    "revision": "861b62715f012f44bc832d631243343f"
  },
  {
    "url": "assets/js/8.4b8b91e4.js",
    "revision": "e64492eeb1b070775443e93623405cf5"
  },
  {
    "url": "assets/js/9.8263cbc0.js",
    "revision": "2732e56671e296517da19d344e906a90"
  },
  {
    "url": "assets/js/app.605d5c0b.js",
    "revision": "fe31dae18835443334e7697d734e1922"
  },
  {
    "url": "assets/js/vendors~flowchart.3fcdbb4e.js",
    "revision": "39bacb236e3e4ac3e4be91f4440547c3"
  },
  {
    "url": "english/2020-11-21-difference-between-to-for.html",
    "revision": "d8c26c58a403a12c955615f2cd4e49cb"
  },
  {
    "url": "english/index.html",
    "revision": "510e227c19e4f3a9d1a38ab6d2f18eac"
  },
  {
    "url": "favicon.png",
    "revision": "66fa78445787d9ca9f414c302d1a9994"
  },
  {
    "url": "index.html",
    "revision": "a422a5e917602e3fce197943ca913282"
  },
  {
    "url": "note/dev/2020-08-06-macos-php-upgrade-compile-extension.html",
    "revision": "eb62347ee108289debae9e298c374039"
  },
  {
    "url": "note/dev/2020-08-07-oracle-query-lob-table-via-dblink.html",
    "revision": "e9e4e6a6cee1676b0f9156b2f69e3a31"
  },
  {
    "url": "note/dev/2020-08-07-ubuntu-remove-snap.html",
    "revision": "d5ae15bf7f85a1a134919aaf1ec50f42"
  },
  {
    "url": "note/dev/2020-08-17-uninstall-tencent-cloud-monitor-service.html",
    "revision": "504e22273ccda1404ccca15d97d7e916"
  },
  {
    "url": "note/dev/2020-08-26-install-frp.html",
    "revision": "25dd45f332ff3fbf662342620a1ebc40"
  },
  {
    "url": "note/dev/index.html",
    "revision": "8bc9802dda892f2a177f3a742d501a97"
  },
  {
    "url": "note/read/2020-07-27-how-2-develop-habitual-self-discipline.html",
    "revision": "5b3bfa121e5ac1b5fff81125c9063dcf"
  },
  {
    "url": "note/read/2020-10-10-how-2-defeat-procrastination.html",
    "revision": "5ca5ebf5396866616f48acb44f8d0afa"
  },
  {
    "url": "note/read/2020-11-13-how-2-take-notes.html",
    "revision": "95ff1c799356cb724f55151d996dacf5"
  },
  {
    "url": "note/read/2020-11-16-how-2-do-life-plan.html",
    "revision": "ab2dedaf78d98bd50a339340771eeee3"
  },
  {
    "url": "note/read/2020-11-17-2-minute-rule.html",
    "revision": "197adb707a6aee34a41b608b0e1fd39b"
  },
  {
    "url": "note/read/index.html",
    "revision": "359395ad65e965fdf7613dc86dfa6d82"
  },
  {
    "url": "plan/five-year-plan.html",
    "revision": "bdb977be03fe6cd2e81a3c66bce96202"
  },
  {
    "url": "plan/index.html",
    "revision": "71ae4ce3892ca9bc1d35db3f6c41e7bb"
  },
  {
    "url": "review/2020/monthly/2020-07-monthly-review.html",
    "revision": "8ca637ec611e9edea6cb44d9b3121362"
  },
  {
    "url": "review/2020/monthly/2020-xx-monthly-review.html",
    "revision": "49a5b631fb9c307476750c612aab27c9"
  },
  {
    "url": "review/2020/weekly/0803-0809-weekly-review.html",
    "revision": "9c5a954ef8e862df2a5856ffda63c93b"
  },
  {
    "url": "review/2020/weekly/xxxx-xxxx-weekly-review.html",
    "revision": "1ceb158d95693ff33d576f85e63167c8"
  },
  {
    "url": "review/index.html",
    "revision": "d280f0f20c315e3abf0b7b3fe08d4e91"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
