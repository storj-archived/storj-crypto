'use strict'

var crypto = require('../src/index.js');

crypto.createCipheriv.apply(
  this,
  ['aes']
)