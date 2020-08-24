import spaceraceAnnotations from './annotations-spacerace'
import { networkName } from './config'

let annotations = {}
if (networkName === 'spacerace') {
  annotations = spaceraceAnnotations
}

export default annotations
