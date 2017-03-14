'use strict'

var d = require('crypto').createDecipher;

module.exports = function(enc, key) {
  return d(enc, key)
}