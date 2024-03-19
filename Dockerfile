# Stage 1: Build Stage
FROM node:20.9.0 as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (adjust the command based on your actual build script)
RUN npm run generate
RUN npm run build

ENV NODE_ENV production


CMD ["npm", "start"]
