# Use the official Node.js image as the base (LTS version)
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if it exists) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]