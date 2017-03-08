'use strict'

let webcrypto
try {
  webcrypto = window.crypto
} catch (err) {
  // not available, use the code below
}

if (webcrypto){
  module.exports = require('./createCipheriv-browser')
} else {
  // do node crypto here
  var crypto = require('crypto')
  module.exports = function(enc, key, iv) {
    return crypto.createCipheriv(enc, key, iv)
  }
}
