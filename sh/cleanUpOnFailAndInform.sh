#!/bin/bash
rm -f TempTicketGenerationFile.txt &&
git checkout dev &&
git branch -D proxyBranchExp &&
echo "EXPECT TRIGGER: cleaned up. back to dev."
