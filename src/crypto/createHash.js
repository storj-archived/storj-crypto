'use strict'

let webcrypto
try {
  webcrypto = window.crypto
} catch (err) {
  // not available, use the code below
}

if (webcrypto){
  module.exports = require('./createHash-browser')
} else {
  var crypto = require('crypto')
  module.exports = function(alg) {
    var self = {}
    self.alg = alg
    self.update = update
    self.digest = digest
    self.hash = crypto.createHash(alg)
    return self
  }

  function update(message) {
    if (typeof message === 'string') {
      message = Buffer.from(message, 'utf-8');
    }
    this.hash.update(message)
    return this
  }

  function digest(enc, cb) {
    if(typeof enc === 'function') {
      cb = enc
      enc = undefined
    }
    return cb(null, this.hash.digest(enc))
  }
}
