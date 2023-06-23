# Use an official Node.js runtime as a parent image
FROM node:16-alpine3.14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application files to the container
COPY . .

EXPOSE 5173

# Start the application with the development server
CMD ["npm", "run", "dev"]