import calibrationAnnotations from './annotations-calibration'
import { networkName } from './config'

let annotations = {}
if (networkName === 'calibration') {
  annotations = calibrationAnnotations
}

export default annotations
