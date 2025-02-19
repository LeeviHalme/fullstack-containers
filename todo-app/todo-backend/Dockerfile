# Use explicit and deterministic Docker base image tag
# for Node.js 23.8.0 on Debian Bullseye (slim)
FROM node:23.8.0-bullseye-slim

# Install dumb-init to handle signals properly
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

# Set the environment variables
ENV NODE_ENV production

# Set the working directory
WORKDIR /usr/src/app

# Copy the files and change the owner to node
COPY --chown=node:node . /usr/src/app

# Install only production dependencies
RUN npm ci --only=production

# Switch to the node user
USER node

# Expose the port
EXPOSE 3000

# Use dumb-init as the entrypoint
ENTRYPOINT ["/usr/bin/dumb-init", "--"]

# Start the server with dumb-init
CMD ["node", "./bin/www"]
