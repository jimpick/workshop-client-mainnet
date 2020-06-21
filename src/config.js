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
  api: 'lotus.testground.ipfs.team/testnet_api',
  secure: true,
  downloadDir: '/tmp/not_supported_yet',
  geoApi: 'testnet.localhost:9000/api',
  geoSecure: true,
  networkName: 'testnet',
  useGeoIp2: true,
  useBaidu: true
}

const interopnetLocalConfig = {
  // api: 'lotus.testground.ipfs.team/interop616_api',
  api: 'localhost:9000/api',
  secure: true,
  downloadDir: '/home/ubuntu/downloads',
  geoApi: 'interopnet.localhost:9000/api',
  geoSecure: true,
  networkName: 'interopnet',
  useGeoIp2: true,
  useBaidu: true
}

const interopnetPublicConfig = {
  api: 'lotus.testground.ipfs.team/interop616_api',
  secure: true,
  downloadDir: '/home/ubuntu/downloads',
  geoApi: 'lotus.testground.ipfs.team/api',
  geoSecure: true,
  networkName: 'interopnet'
}

const testnetPublicConfig = {
  api: 'lotus.testground.ipfs.team/testnet_api',
  secure: true,
  downloadDir: '/home/ubuntu/downloads',
  geoApi: 'lotus.testground.ipfs.team/api',
  geoSecure: true,
  networkName: 'testnet'
}

function getConfig () {
  if (document.location.hostname === 'testnet.localhost') {
    return testnetLocalConfig
  }
  if (document.location.hostname === 'interopnet.localhost') {
    return interopnetLocalConfig
  }
  // return interopnetPublicConfig
  return testnetPublicConfig
}

export const api = getConfig().api
export const secure = getConfig().secure
export const downloadDir = getConfig().downloadDir
export const geoApi = getConfig().geoApi
export const geoSecure = getConfig().geoSecure
export const networkName = getConfig().networkName
export const useGeoIp2 = getConfig().useGeoIp2
export const useBaidu = getConfig().useBaidu
