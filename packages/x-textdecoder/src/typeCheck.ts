// Copyright 2020 @polkadot/x-textdecoder authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BrowserTD from './browser';
import NodeTD from './node';

console.log(new BrowserTD('utf-8').decode(new Uint8Array([1, 2, 3])));
console.log(new NodeTD('utf-8').decode(new Uint8Array([1, 2, 3])));
