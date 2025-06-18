const net = require('net');
const timeout = 5000; // 5 saniye

export default async (req, res) => {
  const client = new net.Socket();
  let isOnline = false;

  client.setTimeout(timeout);
  
  client.connect(25565, 'HackerCreft.aternos.me', () => {
    isOnline = true;
    client.destroy();
    res.json({ online: true });
  });

  client.on('timeout', () => {
    client.destroy();
    res.json({ online: false });
  });

  client.on('error', () => {
    client.destroy();
    res.json({ online: false });
  });
}