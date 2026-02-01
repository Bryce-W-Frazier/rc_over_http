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

//Gpio init
const Gpio = require('pigpio').Gpio;
const led  = new Gpio(4, { mode: Gpio.OUTPUT });
const steering = new Gpio(18, {mode: Gpio.OUTPUT});
let isOn = false;

http.use(express.static(path.join(__dirname, 'client/')));

// Init server
http.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname, 'client/', 'index.html'));
});

// Use port 3000
http.listen(3000, () => {
  console.log("this is a server");
});

// ##########################################################
// Main Section
// ##########################################################

// React to button
http.post('/clicked', (req, res) => {
  console.log('Button was pressed on the frontend!');
  res.send('Action received by Node.js!');

  // Toggle LED
  isOn = !isOn;
  led.digitalWrite(isOn ? 1 : 0);

  //Servo
  if (isOn) {
    steering.servoWrite(500);
  } else {
    steering.servoWrite(2400);
  }
});


// Clean up
// Clean up if the user presses Ctrl+C
process.on('SIGINT', () => {
  led.digitalWrite(0);
  steering.servoWrite(1500);
  process.exit();
});

