'use strict'

var crypto = require('../src/index.js');

console.log(crypto.randomBytes(12))
//console.log(crypto.createHash())
crypto.createHash('sha256')
console.log(crypto.createHash('sha256').update('test').digest())
console.log(crypto)
//console.log(crypto.createHash('sha256').update('message'))
// console.log(crypto.createHash('sha256').update('message').digest('hex'))


// crypto.createHash('sha256','message', 'hex', (err, hash) => {
//   console.log(hash)
// })

// var t = crypto.createHash('sha256').update('message').digest('')
// console.log(t)
// t.digest('hex', function(h) {
//   console.log('1111')
//   console.log(h)
// })