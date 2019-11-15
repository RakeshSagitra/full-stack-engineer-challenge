#!/bin/sh
set -u
set -e

until ./node_modules/.bin/sequelize db:migrate; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

exec "$@"
