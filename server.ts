import app from "./src/main.ts";


const port = parseInt(Deno.env.get("PORT") || "8080");
const hostname = "0.0.0.0"; // Important for AWS

console.log(`Server starting on http://${hostname}:${port}`);

await app.listen({ port, hostname });