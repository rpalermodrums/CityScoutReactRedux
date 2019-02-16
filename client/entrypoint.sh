#!/bin/sh
set -e

if [ "$1" = 'runserver' ]; then
    if [ "$NODE_ENV" = 'development' ]; then
        exec su-exec mighty yarn run start
    else
        chown -R mighty:mighty $APP_DIR/build;
        exec su-exec mighty node server.js
    fi
fi

exec "$@"
