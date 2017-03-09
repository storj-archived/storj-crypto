'use strict'

var crypto = require('browserify-aes')

// NOTE: There is no streaming mode in AES-CTR for webcrypto
// Streaming mode is used by the node implementation so
// we resort to requiring AES in pure ja for now

// let webcrypto
// try {
//   webcrypto = window.crypto
// } catch (err) {
//   // not available, use the code below
// }

//if (webcrypto){
//  module.exports = require('./createDecipheriv-browser')
//} else {
  module.exports = function(enc, key, iv) {
    return crypto.createDecipheriv(enc, key, iv)
  }
//}