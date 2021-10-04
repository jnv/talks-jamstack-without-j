#!/bin/sh

curl $1 | htmlq --text '#__NEXT_DATA__' | wc -c
