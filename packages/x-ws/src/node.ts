// Copyright 2020 @polkadot/x-ws authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

let fn: typeof WebSocket;

if (typeof WebSocket === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-var-requires
  const { w3cwebsocket } = require('websocket');

  fn = w3cwebsocket as unknown as typeof WebSocket;
} else {
  fn = WebSocket;
}

export default fn;
