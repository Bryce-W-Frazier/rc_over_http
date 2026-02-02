// server.js
// Run RC Control System
// Bryce W. Frazier
// 2026-01-31

// ############################################################
// Init 
// ############################################################

// HTTP init
import express from 'express';
import path from 'path';
const app = express();

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Socket init
import http from 'http';
import { Server } from 'socket.io';
const socketServer = http.createServer(app);
const io = new Server(socketServer);

// Controller init
import { steer } from './controller.js';


// Start server
app.use(express.static(path.join(__dirname, 'client/')));

app.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname, 'client/', 'index.html'));
});



// ##########################################################
// Main Section
// ##########################################################

//Handle Client input
io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('steer-to', (steer_vector) => {
    steer(steer_vector);
  });
});

socketServer.listen(3000, () => {
  console.log("Server Started, Port: 3000");
});


// Clean up
process.on('SIGINT', () => {
  led.digitalWrite(0);
  steering.servoWrite(1500);
  process.exit();
});

