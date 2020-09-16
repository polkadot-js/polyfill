// Copyright 2020 @polkadot/x-fetch authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

let fn: typeof fetch;

if (typeof fetch === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  fn = require('node-fetch');
} else {
  fn = fetch;
}

export default fn;
