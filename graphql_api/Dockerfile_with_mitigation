# Use the official Node.js image from the Docker Hub as the base image
FROM node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 5001

# Command to run the application
CMD ["node", "index.js"]
