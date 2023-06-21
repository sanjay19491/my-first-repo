const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/' ){
        res.end('Welcome')
    }
    else if(req.url === '/about' ){
        res.end('history')
    }
    else {res.end(`
        <h1>Oops</h1>
        <p>you are looking wrong page</p>
        <a href="/">backhome</a>`
    )}
})
server.listen(5000);