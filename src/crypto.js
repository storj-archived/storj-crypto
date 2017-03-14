'use strict'

var randomBytes = require('crypto').randomBytes;

// AES only
exports.createDecipheriv = require('./crypto/createDecipheriv');
exports.createCipheriv =require('./crypto/createCipheriv');

// All node core crypto algoritms for now
exports.createDecipher = require('./crypto/createDecipher');
exports.createCipher = require('./crypto/createCipher');
exports.createHash = require('./crypto/createHash');
exports.pbkdf2Sync = require('./crypto/pbkdf2Sync');

// Generates random bytes
exports.randomBytes = (size) => {
  return randomBytes(size);
}

