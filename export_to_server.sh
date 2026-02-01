#!/bin/bash

# export_to_server.sh
# Move software to Rasberry Pi
# Run in root of git repo
# Bryce W. Frazier
# Started: 2026-01-31

read -p "Server Address: " address
read -ps "Server password: " password

scp server/* $address/
ssh $address 'sudo mv server/* /var/node'

