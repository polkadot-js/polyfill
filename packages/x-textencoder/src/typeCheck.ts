// Copyright 2020 @polkadot/x-textencoder authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BrowserTE from './browser';
import NodeTE from './node';

console.log(new BrowserTE().encode('abc'));
console.log(new NodeTE().encode('abc'));
