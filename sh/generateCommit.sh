#!/bin/bash
echo "Temp file used to generate ticket" > TempTicketGenerationFile.txt
git add TempTicketGenerationFile.txt
git commit -m "$1"
echo "EXPECT TRIGGER: ticketGeneratingCommitDone"
