import interopnetAnnotations from './annotations-interopnet'
import { networkName } from './config'

let annotations = {}
if (networkName === 'interopnet') {
  annotations = interopnetAnnotations
}

export default annotations