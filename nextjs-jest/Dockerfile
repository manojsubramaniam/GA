FROM node:lts-alpine
# Set the working directory inside the container
WORKDIR /app
# Install dependencies
COPY package.json ./
RUN npm install
# Copy the application code into the container
COPY . .
# Expose the port that Next.js uses (usually 3000)
EXPOSE 3000
# Start the development server
CMD ["npm", "run", "dev"]
