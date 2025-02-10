FROM denoland/deno:1.39.1

WORKDIR /app

# Cache the dependencies
COPY deps.ts .
RUN deno cache deps.ts

# Copy the application code
COPY . .

# Compile the application
RUN deno cache mod.ts

# The port your application will run on
EXPOSE 8080

# Run the application
CMD ["run", "--allow-net", "--allow-env", "server.ts"]