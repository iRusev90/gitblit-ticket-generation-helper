#!/bin/bash
data="user="$1"&tickets="$2
wget -q --post-data "$data" http://ivanrusev90.com/ticket-generator
