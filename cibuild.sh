#! /bin/bash

# halt script on error, echo commands/output
set -xe

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SRC_ROOT="$DIR"

echo "[$SRC_ROOT]"

(cd $SRC_ROOT && \
  docker build -t dash-website-build . && \
  docker create --name dash-www dash-website-build && \
  docker cp dash-www:/data/_site/ ./_site/ && \
  docker rm dash-www && \
  (cd _site && rm -fr README.md) && \
  echo "Ok. Site built in ${SRC_ROOT}/_site/"
)
