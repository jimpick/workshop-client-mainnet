import fs from 'fs'
import annotations128mibUnverified from './annotations-mainnet-128mib-unverified.js'
import annotations128mibVerified from './annotations-mainnet-128mib-verified.js'

fs.writeFileSync('annotations-mainnet-128mib-unverified.json', JSON.stringify(annotations128mibUnverified, null, 2))
fs.writeFileSync('annotations-mainnet-128mib-verified.json', JSON.stringify(annotations128mibVerified, null, 2))
