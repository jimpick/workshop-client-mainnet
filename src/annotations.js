import interopnetAnnotations from './annotations-interopnet'
import testnetAnnotations from './annotations-testnet'
import nerpaAnnotations from './annotations-nerpa'
import { networkName } from './config'

let annotations = {}
if (networkName === 'interopnet') {
  annotations = interopnetAnnotations
}
if (networkName === 'testnet') {
  annotations = testnetAnnotations
}
if (networkName === 'nerpa') {
  annotations = nerpaAnnotations
}

export default annotations
