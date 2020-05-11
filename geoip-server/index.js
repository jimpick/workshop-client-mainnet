const fs = require('fs')
const fastify = require('fastify')()
const Reader = require('@maxmind/geoip2-node').Reader

let reader

fastify.register(require('fastify-cors'))

fastify.get('/ipv4/:ip', async (request, reply) => {
  console.log('IP:', request.params.ip)
  try {
    const response = reader.city(request.params.ip)
    return response
  } catch (e) {
    reply.code(400)
    return { error: e.message }
  }
})

const dbFile = process.argv[2]
console.log('Opening', dbFile)
if (!fs.existsSync(dbFile)) {
  console.error('Can\'t open dbFile', dbFile)
  process.exit(1)
}

const start = async () => {
  const dbReader = await Reader.open(dbFile)
  reader = dbReader
  // const response = reader.city('64.46.28.178')
  // console.log('Test response', response)
  try {
    await fastify.listen(3003)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
