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

const testnetPublicConfig = {
  api: 'lotus.testground.ipfs.team/testnet_api',
  secure: true,
  downloadDir: '/home/ubuntu/downloads',
  geoApi: 'lotus.testground.ipfs.team/api',
  geoSecure: true,
  networkName: 'testnet'
}

const butterflyLocalConfig = {
  api: 'lotus.testground.ipfs.team/butterfly_api',
  // api: 'butterfly.localhost:9000/api',
  secure: true,
  downloadDir: '/home/ubuntu/downloads',
  geoApi: 'butterfly.localhost:9000/api',
  geoSecure: true,
  networkName: 'butterfly',
  useGeoIp2: true,
  useBaidu: true
}

const nerpaLocalConfig = {
  api: 'lotus.testground.ipfs.team/nerpa_api',
  secure: true,
  downloadDir: '/tmp/not_supported_yet',
  geoApi: 'nerpa.localhost:9000/api',
  geoSecure: true,
  networkName: 'nerpa',
  useGeoIp2: true,
  useBaidu: true
}

const nerpaPublicConfig = {
  api: 'lotus.testground.ipfs.team/nerpa_api',
  secure: true,
  downloadDir: '/home/ubuntu/downloads',
  geoApi: 'lotus.testground.ipfs.team/api',
  geoSecure: true,
  networkName: 'nerpa'
}

/*
const butterflyPublicConfig = {
  api: 'lotus.testground.ipfs.team/butterfly_api',
  secure: true,
  downloadDir: '/home/ubuntu/downloads',
  geoApi: 'lotus.testground.ipfs.team/api',
  geoSecure: true,
  networkName: 'butterfly'
}
*/

function getConfig () {
  if (document.location.hostname === 'testnet.localhost') {
    return testnetLocalConfig
  }
  if (document.location.hostname === 'butterfly.localhost') {
    return butterflyLocalConfig
  }
  if (document.location.hostname === 'nerpa.localhost') {
    return nerpaLocalConfig
  }
  // return butterflyPublicConfig
  // return testnetPublicConfig
  return nerpaPublicConfig
}

export const api = getConfig().api
export const secure = getConfig().secure
export const downloadDir = getConfig().downloadDir
export const geoApi = getConfig().geoApi
export const geoSecure = getConfig().geoSecure
export const networkName = getConfig().networkName
export const useGeoIp2 = getConfig().useGeoIp2
export const useBaidu = getConfig().useBaidu
