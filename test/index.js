'use strict'

var crypto = require('../src/index.js');
console.log(crypto)
console.log(crypto.createDecipheriv('aes-256-ctr'))
console.log(crypto.createCipheriv.apply(
    this,
    ['aes']
  ))