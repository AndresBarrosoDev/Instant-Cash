#!/usr/bin/env sh

set -e

npm run build

cd dist

git init

git add -A

git commit -m "npm run build from gh"

git push -f git@github.com:AndresBarrosoDev/Instant-Cash.git master:gh-pages

cd -