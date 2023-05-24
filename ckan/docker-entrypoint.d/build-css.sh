#!/bin/bash

echo "build-css is hapenning"
echo $(pwd)

npx postcss \
    /srv/app/src_extensions/ckanext-hack4laatd/ckanext/hack4laatd/assets/src/css/theme.css \
    -o /srv/app/src_extensions/ckanext-hack4laatd/ckanext/hack4laatd/assets/theme2.css \
    --verbose


