import fs from 'fs'
import annotations from './annotations-mainnet-128mib-unverified.js'

fs.writeFileSync('annotations-mainnet-128mib-unverified.json', JSON.stringify(annotations, null, 2))
