import app from "./src/main.ts";


const port = 4000;
console.log(`Server running on http://localhost:${port}`);
await app.listen({ port });