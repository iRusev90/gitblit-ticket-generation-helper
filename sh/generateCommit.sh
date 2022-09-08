#!/bin/bash
git commit --allow-empty -m "$1"
echo "EXPECT TRIGGER: ticketGeneratingCommitDone"
