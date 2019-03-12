const urls = [
  // Ads
  "*://*.googletagmanager.com/*",
  "*://*.googleadservices.com/*",
  "*://*.ads.linkedin.com/*",
  "*://*.licdn.com/*",
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
  "*://*.madkudu.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(details => {
  console.log(`Blocked: ${details.url}`)
  return { cancel: true }
}, { urls }, ['blocking'])
