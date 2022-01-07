#!/bin/sh
set -e

envsubst '${PORT},${BACKEND}' < nginx-template.conf > /etc/nginx/conf.d/default.conf

nginx -g 'daemon off;'