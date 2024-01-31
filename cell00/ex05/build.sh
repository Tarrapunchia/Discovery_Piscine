#!/bin/bash
if [ $# -eq 0 ]; then
    >&2 echo "No arguments supplied"
    exit 1
for i; do
	mkdir ex$i
done
