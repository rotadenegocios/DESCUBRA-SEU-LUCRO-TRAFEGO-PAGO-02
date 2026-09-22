// GERADO POR _shared/sync-tracking.mjs - NAO EDITE AQUI
const env = import.meta.env || {}

function flag(value, fallback = false) {
  if (value === undefined || value === '') return fallback
  return String(value).toLowerCase() === 'true'
}

// Aceita um ou mais IDs separados por virgula.
function list(value) {
  return String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

export const config = Object.freeze({
  enabled: flag(env.VITE_TRACKING_ENABLED, true),
  siteId: env.VITE_SITE_ID || 'desconhecido',
  ga4Id: env.VITE_GA4_MEASUREMENT_ID || 'G-434Q7GE2NZ',
  googleAdsId: env.VITE_GOOGLE_ADS_ID || 'AW-17812782806',
  gtmId: env.VITE_GTM_ID || 'GTM-KGV7RZ42',
  pixelIds: [...new Set([
    ...list(env.VITE_META_PIXEL_ID),
    '2074399583036288',
    '1336189881164076',
  ])],
  debug: flag(env.VITE_TRACKING_DEBUG, false),
  consentVersion: 1,
  sessionTimeoutMs: 30 * 60 * 1000,
  identityMaxAgeDays: 365,
})

export function debugLog(...args) {
  if (config.debug) console.info('[tracking]', ...args)
}
