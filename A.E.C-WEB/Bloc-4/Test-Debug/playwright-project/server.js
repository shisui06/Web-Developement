const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send response
    res.end('Hello, World!');
});

// Define the port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
