import mainnetAnnotations from './annotations-mainnet'
import { networkName } from './config'

let annotations = {}
if (networkName === 'mainnet') {
  annotations = mainnetAnnotations
}

export default annotations
