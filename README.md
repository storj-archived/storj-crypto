# storj-crypto

>Modularized crypto for Storj

## Table of Contents

- [Install](#install)
- [Usage](#usage)
  - [Example](#example)
- [API](#api)
  - [`hmac`](#hmac)
    - [`create(hash, secret, callback)`](#createhash-secret-callback)
      - [`digest(data, callback)`](#digestdata-callback)
  - [`aes`](#aes)
    - [`create(key, iv, callback)`](#createkey-iv-callback)
      - [`encrypt(data, callback)`](#encryptdata-callback)
      - [`encrypt(data, callback)`](#encryptdata-callback)
  - [`webcrypto`](#webcrypto)
  - [`keys`](#keys)
  - [`generateKeyPair(type, bits, callback)`](#generatekeypairtype-bits-callback)
- [License](#license)

## Install

```sh
npm i storj-crypto --save
```

## Usage

### Example
