# Use an official Node.js runtime as a parent image
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container's working directory
COPY . .

# Install TypeScript globally and build the TypeScript project
RUN npm install -g typescript
RUN tsc

# Use a smaller base image to run the server (for production)
FROM node:16-slim

# Set the working directory in the container
WORKDIR /app

# Copy only the necessary files (built JavaScript files and dependencies) from the build stage
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package*.json /app/

# Expose the port the app runs on
EXPOSE 3001

# Command to run the app
CMD ["node", "dist/server.js"]
