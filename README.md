# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js servers: unresponsiveness caused by long-running synchronous operations within the request handler.  When a request handler performs a CPU-intensive or I/O-bound task synchronously, the Node.js event loop is blocked, preventing the server from processing other requests.

## Bug

The `server.js` file contains a simple HTTP server.  However, the request handler includes a `while` loop that simulates a lengthy calculation. This blocks the event loop, making the server unresponsive to new requests while the loop is executing.

## Solution

The `serverSolution.js` file demonstrates the solution: using asynchronous operations or offloading long-running tasks to worker threads or other processes.  This prevents blocking the event loop and maintains server responsiveness.

## How to reproduce the bug

1. Clone this repository.
2. Run `node server.js`.
3. Make a request to `http://localhost:3000/`. You'll receive a response eventually, but subsequent requests will be delayed until the first request completes.

## How to test the solution

1. Clone this repository.
2. Run `node serverSolution.js`.
3. Make multiple requests to `http://localhost:3000/`. The server should respond promptly to all requests.