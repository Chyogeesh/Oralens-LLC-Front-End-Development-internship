# Use an official Python runtime as the base image
FROM python:3.10-slim

# Set the working directory
WORKDIR /app

# Copy application files
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose Flask default port
EXPOSE 5000

# Run the Flask app
CMD ["python", "app.py"]
# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Serve the React app using a lightweight web server
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose React default port
EXPOSE 3000
