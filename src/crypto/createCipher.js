'use strict'

var e = require('crypto').createCipher;

module.exports = function(enc, key) {
  return e(enc, key);
}