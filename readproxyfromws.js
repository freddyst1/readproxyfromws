function prepareData(a) {
    return new DataView(new ArrayBuffer(a));
}

var Socks = require('socks');
var fs = require('fs');
var proxyList = fs.readFileSync('proxy.txt', 'utf8').split('\n');
for (i = 0; i < proxyList.length; i++) {
    proxyList[i] = proxyList[i].replace('\r', '');
}
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

function createAgent(ip, port, type) {
    return new Socks.Agent({
        proxy: {
            ipaddress: ip,
            port: port,
            type: type
        }
    });
}