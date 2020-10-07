
import annotations from './annotations-spacerace.js'
import annotations2 from './annotations-spacerace-slingshot-medium.js'

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
    if (annotation.match(/^active/) ||
        annotation.match(/^sealing/) ||
        annotation.match(/^min-/)) {
      const newEntry = annotation.replace(/^[^,]*,/, 'candidate,')
      newEntries.push([miner, newEntry])
    }
  }
}

newEntries.sort(([a], [b]) => {
  return Number(a.slice(1)) - Number(b.slice(1))
})

console.log(newEntries.map(entry => `  ${entry[0]}: ${JSON.stringify(entry[1])},`).join('\n'))

