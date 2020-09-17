// Copyright 2020 @polkadot/x-textencoder authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default typeof TextDecoder === 'undefined'
  ? class {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-useless-constructor
    constructor (_: 'utf-8') {
      // nothing
    }

    decode (value: Uint8Array): string {
      return value.reduce((str, code): string => {
        return str + String.fromCharCode(code);
      }, '');
    }
  }
  : TextDecoder;
