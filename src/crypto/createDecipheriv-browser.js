'use strict'

module.exports = function(enc, key, iv) {
  // do webcrypto here
  console.log(enc)
  console.log(key)
  console.log(iv)
  return window.crypto
}