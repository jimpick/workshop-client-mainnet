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

const testnetConfig = {
  api: 'lotus.testground.ipfs.team/tour_api',
  secure: true,
  downloadDir: '/tmp/not_supported_yet',
  geoApi: 'localhost:9000/api',
  geoSecure: false,
  networkName: 'testnet'
}

function getConfig () {
  if (document.location.hostname === 'testnet') {
    return testnetConfig
  }
  throw new Error('Couldn\'t match hostname for config')
}

export const api = getConfig().api
export const secure = getConfig().secure
export const downloadDir = getConfig().downloadDir
export const geoApi = getConfig().geoApi
export const geoSecure = getConfig().geoSecure
export const networkName = getConfig().networkName
