#!/bin/bash

cd /var/www/html/eu/

sudo zip -r /var/www/backup/src_core_`date +"%Y%m%d%H%M%S"`.zip core/

