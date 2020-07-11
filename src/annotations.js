import butterflyAnnotations from './annotations-butterfly'
import testnetAnnotations from './annotations-testnet'
import nerpaAnnotations from './annotations-nerpa'
import { networkName } from './config'

let annotations = {}
if (networkName === 'butterfly') {
  annotations = butterflyAnnotations
}
if (networkName === 'testnet') {
  annotations = testnetAnnotations
}
if (networkName === 'nerpa') {
  annotations = nerpaAnnotations
}

export default annotations
