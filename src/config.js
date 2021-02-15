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

const mainnetLocalConfig = {
  api: 'lotus.jimpick.com/mainnet_api',
  // api: 'spacerace.localhost:9000/api',
  secure: true,
  downloadDir: '/home/ubuntu/downloads',
  geoApi: 'mainnet.localhost:9021/api',
  geoSecure: true,
  networkName: 'mainnet',
  useGeoIp2: true,
  useBaidu: true
}

const mainnetPublicConfig = {
  api: 'lotus.jimpick.com/mainnet_api',
  secure: true,
  downloadDir: '/home/ubuntu/downloads',
  geoApi: 'lotus.jimpick.com/api',
  geoSecure: true,
  networkName: 'mainnet'
}

function getConfig () {
  if (document.location.hostname === 'mainnet.localhost') {
    return mainnetLocalConfig
  }
  return mainnetPublicConfig
}

export const api = getConfig().api
export const secure = getConfig().secure
export const downloadDir = getConfig().downloadDir
export const geoApi = getConfig().geoApi
export const geoSecure = getConfig().geoSecure
export const networkName = getConfig().networkName
export const useGeoIp2 = getConfig().useGeoIp2
export const useBaidu = getConfig().useBaidu
