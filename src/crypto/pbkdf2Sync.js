'use strict'

let webcrypto
try {
  webcrypto = self.crypto
} catch (err) {
  // not available, use the code below
}

if (webcrypto){
  module.exports = require('./pbkdf2Sync-browser')
} else {
  module.exports = function(secret, salt, it, len, alg) {
    var pbkdf2Sync = require('crypto').pbkdf2Sync;
    return pbkdf2Sync(secret, salt, it, len, alg);
  }
}