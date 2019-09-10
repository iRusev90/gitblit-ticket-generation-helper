#!/bin/bash
rm -f TempTicketGenerationFile.txt &&
git checkout $1 &&
git branch -D proxyBranchExp &&
echo "EXPECT TRIGGER: cleaned up. back to $1."
