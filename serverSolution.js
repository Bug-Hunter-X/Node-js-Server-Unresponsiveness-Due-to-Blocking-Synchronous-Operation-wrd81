const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a long-running task asynchronously using setImmediate
  let i = 0;
  let result = 0;  
  function longCalculation() {
    if (i < 100000000) {
      result += i++;
      setImmediate(longCalculation);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World! ' + result);
    }
  }
  longCalculation();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});