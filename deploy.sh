#!/bin/bash

# Pull the latest changes from the main branch
git pull origin main

# Build and start the Docker containers in detached mode
docker compose up --build -d
