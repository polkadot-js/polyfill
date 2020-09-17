// Copyright 2020 @polkadot/polyfill authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
