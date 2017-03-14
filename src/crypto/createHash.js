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
  module.exports = function(alg) {
    var self = {}
    self.alg = alg
    self.update = update
    self.digest = digest
    self.msg = []
    return self
  }

  function update(message) {
    if (typeof message === 'string') {
      message = Buffer.from(message, 'utf-8');
    }
    this.msg.push(message)
    return this
  }

  function digest(enc, cb) {
    if(typeof enc === 'function') {
      cb = enc
      enc = undefined
    }
    var crypto = require('crypto')
    var newBuffer = Buffer.concat(this.msg)
    return cb(null, crypto.createHash(this.alg).update(newBuffer).digest(enc))
  }
}
