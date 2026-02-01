// server.js
// Run RC Control System
// Bryce W. Frazier
// 2026-01-31

// ############################################################
// Init 
// ############################################################

// HTTP init
const express = require('express');
const path = require('path');
const app = express();

// Socket init
const http = require('http');
const { Server } = require('socket.io');
const socketServer = http.createServer(app);
const io = new Server(socketServer);

//Gpio init
const Gpio = require('pigpio').Gpio;
const led  = new Gpio(4, { mode: Gpio.OUTPUT });
const steering = new Gpio(18, {mode: Gpio.OUTPUT});


// Start server
app.use(express.static(path.join(__dirname, 'client/')));

app.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname, 'client/', 'index.html'));
});

/*app.listen(3000, () => {
  console.log("this is a server");
});*/



// ##########################################################
// Main Section
// ##########################################################


io.on('connection', (socket) => {
  console.log('Client connected');

  // Listen for 'move-servo' event from browser
  socket.on('steer-to', (pulseWidth) => {
    steering.servoWrite(pulseWidth);
    console.log(`Moving to ${pulseWidth}us`);
  });
});

socketServer.listen(3000, () => {
  console.log("started");
});


// Clean up
// Clean up if the user presses Ctrl+C
process.on('SIGINT', () => {
  led.digitalWrite(0);
  steering.servoWrite(1500);
  process.exit();
});

const servo_pulse_range = [500, 2400];
const steer_vector_range = [-500, 500];

// function mapRange
// Take value and apply it to a differnt range
function mapRange(value, oldRange, newRange) {
  return ((value - oldRange[0]) * (newRange[1] - newRange[0]) / (oldRange[1] - oldRange[0])) + newRange[0];
}

function steer(steer_vector) {
  servomapRange(steer_vector, steer_vector_range, servo_pulse_range);
}
