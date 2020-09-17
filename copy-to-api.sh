#!/usr/bin/env bash
# Copyright 2020 @polkadot/x-fetch authors & contributors
# SPDX-License-Identifier: Apache-2.0

function copy_folder () {
  SRC="packages/$1/build"
  DST="../api/node_modules/@polkadot/$1"

  echo "** Copying $SRC to $DST"

  rm -rf $DST
  cp -r $SRC $DST
}

yarn polkadot-dev-build-ts

copy_folder "x-fetch"
copy_folder "x-ws"
