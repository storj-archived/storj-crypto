'use strict'

var crypto = window.crypto;

// Only SHA-256 is supported currently
module.exports = createHash;

function createHash(algorithm) {
  var self = {}
  self.alg = algorithm
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
  var newBuffer = Buffer.concat(this.msg)
  crypto.subtle.digest("SHA-256", newBuffer).then((hash)=>{
    return cb(null, hex(hash))
  }).catch((err) => {
    return cb(err, null)
  })
}

function hex(buffer) {
  var hexCodes = [];
  var view = new DataView(buffer)
  for (var i = 0; i < view.byteLength; i += 4) {
    // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
    var value = view.getUint32(i)
    // toString(16) will give the hex representation of the number without padding
    var stringValue = value.toString(16)
    // We use concatenation and slice for padding
    var padding = '00000000'
    var paddedValue = (padding + stringValue).slice(-padding.length)
    hexCodes.push(paddedValue)
  }

  // Join all the hex strings into one
  return hexCodes.join("")
}
