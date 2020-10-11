import newer from './annotations-spacerace-newer.js'
import older from './annotations-spacerace-older.js'

for (const miner in older) {
  if (!newer[miner]) {
    console.log(`  ${miner}: ${JSON.stringify(older[miner])},`)
  }
}
