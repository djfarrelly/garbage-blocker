const urls = [
  // Ads
  "*://*.googletagmanager.com/*",
  "*://*.ads.linkedin.com/*",
  "*://*.doubleclick.net/*,
  // Tracking
  "*://*.driftt.com/*",
  "*://*.api.drift.com/*",
  "*://*.customer.io/*",
  "*://cdn.amplitude.com/*",
  "*://*.clearbit.com/*",
  "*://*.intellimize.co/*",
  "*://script.hotjar.com/*",
  "*://*.bizible.com/*",
  "*://*.marketo.net/*",
  "*://*.getdrip.com/*",
  "*://*.madkudu.com/*",
  "*://rs.fullstory.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(details => {
  console.log(`Blocked: ${details.url}`)
  return { cancel: true }
}, { urls }, ['blocking'])
