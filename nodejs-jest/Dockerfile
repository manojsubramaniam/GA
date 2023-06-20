# Use a Node.js base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files to the working directory
COPY . .

# Expose the port used by the application
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]

