// Copyright 2020 @polkadot/x-textencoder authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BrowserTE from './browser';
import NodeTE from './node';

function checkBrowser () {
  const te = new BrowserTE();
  const result = te.encode('abc');

  console.log(result);
}

function checkNode () {
  const te = new NodeTE();
  const result = te.encode('abc');

  console.log(result);
}

checkBrowser();
checkNode();
