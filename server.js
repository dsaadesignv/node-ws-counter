const http = require('http');
const WebSocket = require('ws');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(require('fs').readFileSync('index.html', 'utf8'));
});

const wss = new WebSocket.Server({ server });

let counter = 1000;
let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);

            if (data.type === 'increment') {
                counter++;
                randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ 
                            color: randomColor, 
                            value: counter 
                            }));
                    }
                });
            }
        } catch (error) {
            // Message ordinaire
        }
    });

    // Envoyer la valeur du compteur au client lors de la connexion
    ws.send(JSON.stringify({ color: randomColor , value: counter }));

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Écoutez sur toutes les interfaces réseau à l'aide de l'adresse IP de votre ordinateur
const ipAddress = '192.168.0.27'; // Remplacez par votre adresse IP
const port = 3000;

server.listen(port, ipAddress, () => {
    console.log(`Server is listening on http://${ipAddress}:${port}`);
});
