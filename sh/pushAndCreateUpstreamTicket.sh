#!/bin/bash
git push origin HEAD:refs/for/$1
echo "EXPECT TRIGGER: Expect upstream ticket created"
