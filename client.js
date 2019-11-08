const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = new EventEmitter();
const server = require('./server.js')(client);

rl.on('line', input => {
  console.log(input);
});
