import fs from 'fs'

const lines = fs.readFileSync('annotations-mainnet-128mib-verified.js', 'utf8').split('\n')

const newLines = []
for (const line of lines) {
  const match = line.match(/(\s+)(f0\d+): (.)([^,]+)(,.*)/)
  if (match) {
    const whitespace = match[1]
    const miner = match[2]
    const quote = match[3]
    const state = match[4]
    const rest = match[5]
    // console.log(`Match ${miner}:`, quote, state, rest)
    const skipFile = '/home/ubuntu/filecoin-wiki-test/' +
      'wiki-small-blocks-combined-128-verified/skip-miners/' + miner
    let newState
    if (fs.existsSync(skipFile)) {
      newState = fs.readFileSync(skipFile, 'utf8').split('\n')[0]
    } else {
      newState = state
    }
    newLines.push(`${whitespace}${miner}: ${quote}${newState}${rest}`)
  } else {
    newLines.push(line)
  }
}

fs.writeFileSync('annotations-mainnet-128mib-verified.js', newLines.join('\n'))
