#!/bin/bash
# generate 10 gha workflow runs to trigger auto scaling
for i in {1..10}
do
    git commit --allow-empty -m "bump"
    git push
done
