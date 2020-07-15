import butterflyAnnotations from './annotations-butterfly'
import { networkName } from './config'

let annotations = {}
if (networkName === 'butterfly') {
  annotations = butterflyAnnotations
}

export default annotations
