#!/bin/bash
git branch -D proxyBranchExp
git checkout -b proxyBranchExp && echo "EXPECT TRIGGER: proxyBranchExp created"
