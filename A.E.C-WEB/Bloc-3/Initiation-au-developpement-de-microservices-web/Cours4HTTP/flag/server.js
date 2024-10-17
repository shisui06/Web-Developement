const http = require('http');
const fs = require('fs');
const lookup = require('country-code-lookup');
const path = require('path');

const PORT = 81;


const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {

        renderFormPage(res, '');  
    } else if (req.method === 'POST' && req.url === '/country') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();  
        });

        req.on('end', () => {
            const params = new URLSearchParams(body);
            let countryCode = params.get('countryCode');

            if (countryCode) {
                countryCode = countryCode.trim().toUpperCase();

                const country = lookup.byIso(countryCode);  
                if (country) {
                    const countryFlagUrl = `https://flagcdn.com/48x36/${country.iso2.toLowerCase()}.png`;  
                    const result = `<h2>${country.country}</h2><img src="${countryFlagUrl}" alt="Flag of ${country.country}" />`;  
                    renderFormPage(res, result);  
                } else {
                    renderFormPage(res, '<p style="color:red;">Invalid ISO2 code</p>');  
                }
            } else {
                renderFormPage(res, '<p style="color:red;">Country code is missing</p>');  
            }
        });
    } else if (req.method === 'GET' && req.url === '/style.css') {
        
        const cssPath = path.join(__dirname, 'public', 'style.css');
        fs.readFile(cssPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading CSS');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });
    } else {
        
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});


function renderFormPage(res, result) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <html>
        <head>
            <title>Country Lookup</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <h1>Recherche de pays par code ISO2 </h1>
            <form action="/country" method="POST">
                <label for="countryCode">Entrez le code ISO2</label>
                <input type="text" id="countryCode" name="countryCode" required>
                <button type="submit">Rechercher</button>
            </form>
            <div class="result">${result}</div> 
        </body>
        </html>
    `);
}

// Start the server
server.listen(81, () => {
    console.log(`Server running at http://localhost:81`);
});
