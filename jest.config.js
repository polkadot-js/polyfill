// Copyright 2020 @polkadot/polyfill authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const config = require('@polkadot/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/(x-fetch|x-ws)(.*)$': '<rootDir>/packages/$1/src/$2'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/*/build'
  ],
  resolver: './jest.resolver.js'
});
