#!/bin/sh
# Builds the site locally the same way GitHub Pages does. Needs Docker.
set -eu
root=$(cd "$(dirname "$0")/.." && pwd)
cache=${INSPIRE_GEM_CACHE:-$HOME/.cache/inspire-site-gems}
mkdir -p "$cache"
exec docker run --rm --user "$(id -u):$(id -g)" \
  -e HOME=/tmp -e BUNDLE_PATH=/gems -e BUNDLE_GEMFILE=/site/_dev/Gemfile -e PAGES_REPO_NWO=inspire-networking/inspire-networking.github.io -e JEKYLL_ENV=production \
  -v "$root:/site" -v "$cache:/gems" -w /site ruby:3.3.4 \
  sh -c 'bundle install --quiet && bundle exec jekyll build --trace'
