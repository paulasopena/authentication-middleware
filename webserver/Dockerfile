# Use the official Node.js image for development
FROM node:18.18.0 AS Development

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./
# Install all dependencies including development dependencies
RUN npm install
# Copy the rest of the application files
COPY . .
# Expose the port your development server is listening on (e.g., 3000)
EXPOSE 3000

CMD ["npm", "run", "start"]