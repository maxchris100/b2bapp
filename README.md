<!-- root -->
cd server
tambahkan baris ini di paling bawah untuk development
console.log('🚀 Server is running on http://localhost:5000');

serve({ fetch: app.fetch, port: 5000 }); // 👈 di sini kamu set port-nya
npm run dev


cd client
bun run start
