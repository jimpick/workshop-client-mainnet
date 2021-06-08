#! /bin/bash

set -e
set +x

node make-json.js
mkdir -p ../dist
rm -f ../dist/*.json
cp *.json ../dist
(cd ../dist; hub bucket push -y)
