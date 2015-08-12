console.log(123);
var peerflix = require('peerflix');

var magnetLink = 'magnet:?xt=urn:btih:9609f0336566953f3bf342241b25e2437f65b2c8';

var args = { _: [ magnetLink ],
  c: 100, //connections
  port: 8888
};


module.exports = {
  engine: peerflix(magnetLink, args),
  url: 'http://localhost:' + args.port
};
