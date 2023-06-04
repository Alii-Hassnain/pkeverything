# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock (or package-lock.json) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the working directory
COPY . .

# Expose the Strapi default port (1337)
EXPOSE 1337

# Set the environment variables
ENV NODE_ENV=development
ENV HOST=0.0.0.0

# Build the Strapi admin panel
RUN npm run build

# Start the Strapi server
CMD ["npm", "start"]
