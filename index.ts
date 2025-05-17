import { serve } from "bun";
import app from "server";

console.log('🚀 Server is running on http://localhost:5000');
serve({ fetch: app.fetch, port: 5000 }); // 👈 di sini kamu set port-nya