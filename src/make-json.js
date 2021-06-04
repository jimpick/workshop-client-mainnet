/*
import fs from 'fs'
import annotations from './annotations-mainnet.js'
import annotations128mibUnverified from './annotations-mainnet-128mib-unverified.js'
import annotations128mibVerified from './annotations-mainnet-128mib-verified.js'

fs.writeFileSync('annotations-mainnet.json', JSON.stringify(annotations, null, 2))
fs.writeFileSync('annotations-mainnet-128mib-unverified.json', JSON.stringify(annotations128mibUnverified, null, 2))
fs.writeFileSync('annotations-mainnet-128mib-verified.json', JSON.stringify(annotations128mibVerified, null, 2))
*/

const fs = require('fs')

const annotationsText = fs.readFileSync('./annotations-mainnet.js', 'utf8')
const modified = annotationsText.replace(/export.*/, '').replace('const annotations = ', 'x = ')
// console.log(modified)
const annotations = eval(modified)
const minerIndexes = Object.keys(annotations)
  .map(miner => Number(miner.slice(2)))
  .sort((a, b) => a - b)
const minerIndexesExcludingDelisted = [...minerIndexes].filter(index => !annotations[`f0${index}`].match(/^delist,/))

fs.writeFileSync('./annotated-miner-indexes.json', JSON.stringify(minerIndexes, null, 2))
fs.writeFileSync('./annotated-miner-indexes-excluding-delisted.json', JSON.stringify(minerIndexesExcludingDelisted, null, 2))
fs.writeFileSync('./annotations-mainnet.json', JSON.stringify(annotations, null, 2))
