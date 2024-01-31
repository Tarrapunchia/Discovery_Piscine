#!/bin/bash
n=3
if [ $# -eq 0 ]; then
    >&2 echo "No arguments supplied"
    exit 1
fi
for ((i = 1; i <= $# ; i++)); do
	if [ $i -gt $n ]; then
		exit 1
	fi
	echo ${!i}
done