const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 3001
const payload = JSON.parse(
  fs.readFileSync('./cms-payload.json', { encoding: 'utf8' })
)

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(JSON.stringify(payload))
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
