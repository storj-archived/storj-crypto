'use strict'

function pbkdf2Sync(secret, salt, it, len, alg) {
  // First, create a PBKDF2 "key" containing the password
  self.crypto.subtle.importKey(
    "raw",
    secret,
    {"name": "PBKDF2"},
    false,
    ["deriveKey"]).
  // Derive a key from the password
  then(function(baseKey){
    return self.crypto.subtle.deriveKey(
      {
        "name": "PBKDF2",
        "salt": salt,
        "iterations": it,
        "hash": alg
      },
      baseKey,
      {"name": "AES-CBC", "length": 256}, // Key we want
      true,                               // Extrable
      ["encrypt", "decrypt"]              // For new key
      );
  }).
  // Export
  then(function(aesKey) {
    return self.crypto.subtle.exportKey("raw", aesKey);
  })
}

module.exports = pbkdf2Sync;