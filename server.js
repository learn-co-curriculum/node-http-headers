var http = require('http')

var server = http.createServer(function(request, response) {
  console.log(request.headers['accept-charset'])
  console.log(request.headers['azat-header'])
  console.log('URL: ', request.url)
  console.log('METHOD: ', request.method)
  var users = ['56b64e2c765eb2fdb6238f7b', '56b64e2e765eb2fdb6238f7c', '56b64e2f765eb2fdb6238f7d']
  var body = 'Your request to ' + request.url + ':' + JSON.stringify(users)
  response.writeHead(200, 'awesome', {
    'Content-Length': body.length,
    'Content-Type': 'text/plain' })
  response.end(body)
})

server.listen(3000)
