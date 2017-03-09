'use strict'

var crypto = require('browserify-aes')

// NOTE: There is no streaming mode in AES-CTR for webcrypto
// Streaming mode is used by the node implementation so
// we resort to requiring AES in pure ja for now

module.exports = function(enc, key, iv) {
  return crypto.createCipheriv(enc, key, iv)
}