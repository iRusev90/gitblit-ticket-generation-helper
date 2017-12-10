#!/bin/bash
gitCheckoutCommand="git checkout ticket/"$1
eval "$gitCheckoutCommand"
echo "EXPECT TRIGGER: expTicketCheckedOut"
