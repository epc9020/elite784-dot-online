const ws = require('ws');
const wss = new ws.Server({
    maxPayload: 1024 * 1024
});

let ids = 1;
wss.on("connection", (ws, req) => {
    ws.id = ids++;
    ws.on('error', console.error);
    ws.on("message", msg => {
        wss.clients.forEach(client => {
            client.send(`${ws.id}: ${msg}`);
        });
    });
});