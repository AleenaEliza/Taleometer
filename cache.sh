#!/bin/sh

sudo php artisan optimize
sudo php artisan config:clear
sudo php artisan route:clear
sudo php artisan route:cache
sudo php artisan optimize
