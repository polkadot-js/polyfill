// Copyright 2020 @polkadot/x-ws authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { w3cwebsocket } from 'websocket';

export default (w3cwebsocket as unknown as typeof WebSocket);
