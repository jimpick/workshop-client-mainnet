import interopnetAnnotations from './annotations-interopnet'
import testnetAnnotations from './annotations-testnet'
import { networkName } from './config'

let annotations = {}
if (networkName === 'interopnet') {
  annotations = interopnetAnnotations
}
if (networkName === 'testnet') {
  annotations = testnetAnnotations
}

export default annotations
