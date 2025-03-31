#!/bin/bash
# Simple shell script to interact with Claude API through the Python script

# Path to the Python script (update this if needed)
SCRIPT_PATH="./claude-api-client.py"

# Make sure the Python script is executable
chmod +x "$SCRIPT_PATH"

# Forward all arguments to the Python script
"$SCRIPT_PATH" "$@"
