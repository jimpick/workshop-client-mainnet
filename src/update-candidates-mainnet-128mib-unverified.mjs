import annotations from './annotations-mainnet.js'
import annotations2 from './annotations-mainnet-128mib-unverified.js'
import annotations3 from './annotations-mainnet-128mib-unverified-previous.js'

const newAnnotations = {}

for (const miner in annotations2) {
  const annotation = annotations2[miner]
  if (!annotation.match(/^candidate/)) {
    newAnnotations[miner] = annotation
  }
}

const newEntries = []

for (const miner in annotations) {
  const annotation = annotations[miner]
  if (!newAnnotations[miner]) {
    if (
      annotation.match(/^active/) ||
      annotation.match(/^sealing/) ||
      annotation.match(/^stuck/) ||
      annotation.match(/^busy/) ||
      annotation.match(/^min-/) ||
      annotation.match(/^max-/)
    ) {
      let newTag = 'candidate,'
      if (
        annotations3[miner] &&
        (annotations3[miner].match(/active,/) ||
          annotations3[miner].match(/active-sealing,/))
      ) {
        newTag = 'active-candidate,'
      }
      const newEntry = annotation.replace(/^[^,]*,/, newTag)
      newEntries.push([miner, newEntry])
    }
  }
}

newEntries.sort(([a], [b]) => {
  return Number(a.slice(1)) - Number(b.slice(1))
})

console.log(
  newEntries
    .map(entry => `  ${entry[0]}: ${JSON.stringify(entry[1])},`)
    .join('\n')
)
