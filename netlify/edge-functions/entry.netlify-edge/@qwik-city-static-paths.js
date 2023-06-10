const staticPaths = new Set(["/_headers","/favicon.svg","/fonts/Barlow-Bold.woff","/fonts/Barlow-Light.woff","/fonts/Barlow-Medium.woff","/fonts/Barlow-SemiBold.woff","/q-manifest.json","/service-worker.js","/~partytown/debug/partytown-atomics.js","/~partytown/debug/partytown-media.js","/~partytown/debug/partytown-sandbox-sw.js","/~partytown/debug/partytown-sw.js","/~partytown/debug/partytown-ww-atomics.js","/~partytown/debug/partytown-ww-sw.js","/~partytown/debug/partytown.js","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };