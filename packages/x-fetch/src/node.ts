// Copyright 2020 @polkadot/x-fetch authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import nodeFetch from 'node-fetch';

const fn = typeof fetch === 'undefined'
  ? nodeFetch
  : fetch;

export default fn;
