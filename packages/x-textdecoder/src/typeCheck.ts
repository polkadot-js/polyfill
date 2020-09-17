// Copyright 2020 @polkadot/x-textdecoder authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BrowserTD from './browser';
import NodeTD from './node';

function checkBrowser () {
  const td = new BrowserTD('utf-8');
  const result = td.decode(new Uint8Array([1, 2, 3]));

  console.log(result);
}

function checkNode () {
  const td = new NodeTD('utf-8');
  const result = td.decode(new Uint8Array([1, 2, 3]));

  console.log(result);
}

checkBrowser();
checkNode();
