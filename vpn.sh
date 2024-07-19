#! /usr/bin/env bash

while read p || [[ -n $p ]]; do
    piactl set region $p
    sleep 10
done < regions.txt