#!/bin/sh
set -ex

if [ "$1" = 'build' ]; then
    exec convox build --rack $2 --app $3 -m convox.yml --description $REVISION
elif [ "$1" = 'deploy' ]; then
    exec convox deploy --wait --rack $2 --app $3 -m convox.yml --description $REVISION
fi

exec "$@"
