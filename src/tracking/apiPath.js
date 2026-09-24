// GERADO POR _shared/sync-tracking.mjs - NAO EDITE AQUI
// O BIO serve paginas sob prefixos legados (/dsl-tf01, /pa-tf01) e canonicos
// (/dsl01, /pa01). APIs precisam do mesmo prefixo para nao cair no SPA raiz.
const PREFIX_PATTERN = /^\/(?:dsl(?:-tf)?\d{2}|pa(?:-tf)?\d{2}|kpc(?:-tf)?\d{2}|dsl-teste01|dsl-upsell|kpc-upsell)(?=\/|$)/

export function resolveApiPath(path) {
  if (typeof window === 'undefined') return path

  const prefix = window.location.pathname.match(PREFIX_PATTERN)
  return prefix ? `${prefix[0]}${path}` : path
}
