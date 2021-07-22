const fs = require('fs')
const fetch = require('node-fetch')
const fastify = require('fastify')()
const Reader = require('@maxmind/geoip2-node').Reader
const WebServiceClient = require('@maxmind/geoip2-node').WebServiceClient
require('dotenv').config()

let client

if (process.env.MAXMIND_USER && process.env.MAXMIND_KEY) {
  client = new WebServiceClient(
    process.env.MAXMIND_USER,
    process.env.MAXMIND_KEY
  )
}

let reader

fastify.register(require('fastify-cors'))

fastify.get('/geolite2/:ip', async (request, reply) => {
  console.log('IP:', request.params.ip)
  try {
    const response = reader.city(request.params.ip)
    return response
  } catch (e) {
    reply.code(400)
    return { error: e.message }
  }
})

if (client) {
  fastify.get('/geoip2/:ip', async (request, reply) => {
    console.log('IP via API:', request.params.ip)
    try {
      const response = await client.city(request.params.ip)
      return response
    } catch (e) {
      reply.code(400)
      return { error: e.message }
    }
  })
}

if (process.env.BAIDU_KEY) {
  fastify.get('/baidu/:ip', async (request, reply) => {
    console.log('IP via Baidu:', request.params.ip)
    try {
      const url =
        `https://api.map.baidu.com/location/ip?` +
        `ak=${process.env.BAIDU_KEY}&` +
        `ip=${request.params.ip}&coor=bd09ll`
      const response = await fetch(url)
      const json = await response.json()
      return json
    } catch (e) {
      reply.code(400)
      return { error: e.message }
    }
  })
}

const dbFile = process.argv[2]
console.log('Opening', dbFile)
if (!fs.existsSync(dbFile)) {
  console.error("Can't open dbFile", dbFile)
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
