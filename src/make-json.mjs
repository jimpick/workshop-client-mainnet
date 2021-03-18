import fs from 'fs'
import annotations128mibUnverified from './annotations-mainnet-128mib-unverified.js'

fs.writeFileSync('annotations-mainnet-128mib-unverified.json', JSON.stringify(annotations128mibUnverified, null, 2))
