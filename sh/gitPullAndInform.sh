#!/bin/bash
git checkout dev
git pull && sleep 5 && echo "EXPECT TRIGGER: gitPullDone"
