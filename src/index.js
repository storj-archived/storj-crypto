'use strict'

var crypto = require('./crypto');
var randomBytes = require('crypto').randomBytes;

exports.createDecipheriv = crypto.createDecipheriv;
exports.createCipheriv = crypto.createCipheriv;
exports.pbkdf2Sync = crypto.pbkdf2Sync;

// Generates random bytes
exports.randomBytes = (size) => {
  return randomBytes(size);
}