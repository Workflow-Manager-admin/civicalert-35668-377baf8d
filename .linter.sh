#!/bin/bash
cd /home/kavia/workspace/code-generation/civicalert-35668-377baf8d/civicalert_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

