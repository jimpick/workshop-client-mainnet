import fs from 'fs'
import annotations from './annotations-spacerace-slingshot-medium.js'

fs.writeFileSync('annotations-spacerace-slingshot-medium.json', JSON.stringify(annotations, null, 2))
