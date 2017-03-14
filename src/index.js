'use strict'

var crypto = require('./crypto');

exports.createDecipheriv = crypto.createDecipheriv;
exports.createCipheriv = crypto.createCipheriv;
exports.createDecipher = crypto.createDecipher;
exports.createCipher = crypto.createCipher;
exports.createHash = crypto.createHash;
exports.pbkdf2Sync = crypto.pbkdf2Sync;

// utils
exports.randomBytes = crypto.randomBytes;

