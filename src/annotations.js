import testnetAnnotations from './annotations-testnet'
import { networkName } from './config'

let annotations = {}
if (networkName === 'testnet') {
  annotations = testnetAnnotations
}

export default annotations
