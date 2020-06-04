/*
export const api = 'localhost:9000/api'
export const secure = false
export const downloadDir = '/home/lotus1/downloads'
*/

// Ngrok example: https://xxxxxx.ngrok.io
/*
export const api = 'c96e7a63.ngrok.io/api'
export const secure = true
export const downloadDir = '/home/lotus1/downloads'
*/

const testnetLocalConfig = {
  api: 'lotus.testground.ipfs.team/tour_api',
  secure: true,
  downloadDir: '/tmp/not_supported_yet',
  geoApi: 'localhost:9000/api',
  geoSecure: false,
  networkName: 'testnet'
}

const interopnetLocalConfig = {
  api: 'lotus.testground.ipfs.team/interop61_api',
  secure: true,
  downloadDir: '/tmp/not_supported_yet',
  geoApi: 'localhost:9000/api',
  geoSecure: false,
  networkName: 'interopnet'
}

const interopnetPublicConfig = {
  api: 'lotus.testground.ipfs.team/interop61_api',
  secure: true,
  downloadDir: '/tmp/not_supported_yet',
  geoApi: 'lotus.testground.ipfs.team/api',
  geoSecure: true,
  networkName: 'interopnet'
}

function getConfig () {
  if (document.location.hostname === 'testnet') {
    return testnetLocalConfig
  }
  if (document.location.hostname === 'interopnet') {
    return interopnetLocalConfig
  }
  return interopnetPublicConfig
}

export const api = getConfig().api
export const secure = getConfig().secure
export const downloadDir = getConfig().downloadDir
export const geoApi = getConfig().geoApi
export const geoSecure = getConfig().geoSecure
export const networkName = getConfig().networkName
