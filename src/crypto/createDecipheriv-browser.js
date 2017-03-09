'use strict'
var Transform = require('stream').Transform;
var util = require('util');

var inherits = require('util').inherits;
var stream = require('readable-stream');
var crypto = window.crypto;

function generateKey(rawKey, enc) {
  var usages = ['encrypt', 'decrypt'];
  var extractable = true;
  return crypto.subtle.importKey(
    'raw'
  , rawKey
  , { name: 'AES-CTR' }
  , extractable
  , usages
  );
}

function DecryptStream(enc, key, iv) {
  if (!(this instanceof DecryptStream)) {
    return new DecryptStream(keyiv);
  }
  var self = this;
  self.enc = enc;
  generateKey(key, enc).then(function(k) {
    self.key = k
    self.algorithm = self.key.algorithm
    self.algorithm.counter = iv
    self.algorithm.length = 128
  });

  stream.Transform.call(this);
}

util.inherits(DecryptStream, stream.Transform);

/**
 * Writes to the underlying decipher
 * @private
 */
DecryptStream.prototype._transform = function(chunk, enc, callback) {
  console.log('chunk piped to from concat s')
  console.log(chunk)
  var self = this;
  // window.crypto.subtle.decrypt(
  //   { 
  //     name: 'AES-CTR', 
  //     counter: new ArrayBuffer(16),
  //     length: '256',
  //     iv: this.iv 
  //   },
  //   this.key,
  //   chunk
  // )
  // .then(function(decrypted) {
  //   console.log(decrypted)
  // })
  window.crypto.subtle.decrypt(
    self.algorithm,
    self.key,
    chunk
  )
  .then(function(decrypted) {
    console.log('decrypted chunk length')
    console.log(decrypted.byteLength)
    var buf = new Buffer(decrypted.byteLength);
    var view = new Uint8Array(decrypted)
    for(var i=0; i<buf.length; i++){
      buf[i] = view[i]
    }
    //console.log(buf)
    self.push(buf)
    callback()
  })
  .catch(function(err) {
    console.log(err)
  })
};

// DecryptStream.prototype._read = function() {
//   this.push('teat')
// };

/**
 * Ensures there is no more data to be read from decipher
 * @private
 */
DecryptStream.prototype._flush = function(callback) {
  callback();
};

/**
 * Triggered when some input bytes have become decrypted output bytes
 * @event DecryptStream#data
 * @type {Buffer}
 */

/**
 * Triggered when the stream has ended
 * @event DecryptStream#end
 */

module.exports = function(enc, key, iv) {
  // do webcrypto here
  var decipher = ciphers.createDecipheriv(mode, key, iv)
  var ds = new DecryptStream(enc, key, iv)
  return ds
}

