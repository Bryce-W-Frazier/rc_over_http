// server.js
// Run RC Control System
// Bryce W. Frazier
// 2026-01-31

// ############################################################
// Init 
// ############################################################

// Import Modules
const express = require('express');
const path = require('path');
const http = express();

const Gpio = require('onoff').Gpio;
const led  = new Gpio(4, 'out');

http.use(express.static(path.join(__dirname)));

// Init server
http.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Use port 3000
http.listen(3000, () => {
  console.log("this is a server");
});

//React to button
http.post('/clicked', (req, res) => {
  console.log('Button was pressed on the frontend!');
  res.send('Action received by Node.js!');

  const currentState = led.readSync(); // Read current value (0 or 1)
  led.writeSync(currentState === 0 ? 1 : 0);
});

//Clean up
// Clean up if the user presses Ctrl+C
process.on('SIGINT', () => {
  led.writeSync(0);
  led.unexport();
  process.exit();
});

