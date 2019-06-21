#!/bin/bash
git checkout $1
git pull
echo "EXPECT TRIGGER: gitPullDone"
