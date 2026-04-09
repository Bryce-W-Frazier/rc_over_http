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
import { Controller } from './controller.js';


// Start server
app.use(express.static(path.join(__dirname, 'client/')));

app.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname, 'client/', 'index.html'));
});



// ##########################################################
// Main Section
// ##########################################################

//Handle Client input
let lastHandshake = Date.now();
const CONNECT_TIMEOUT = 200; // Kill engines if 200ms pass with no ping.

io.on('connection', (socket) => {
  console.log('Client connected');
  lastHandshake = Date.now();

  socket.on('steer-to', (steer_vector) => Controller.steer(steer_vector));
  socket.on('throttle-to', (throttle_level) => Controller.setThrottle(throttle_level));

  socket.on('handshake', () => { lastHandshake = Date.now(); });
  
  socket.on('disconnect', () => {
  console.log(`Client disconnected: ${socket.id}`);
  Controller.stop();
  });
});

setInterval(() => {
  if (Date.now() - lastHandshake > CONNECT_TIMEOUT) {
    Controller.stop();
  }
}, 10);

socketServer.listen(3000, () => {
  console.log("Server Started, Port: 3000");
});


// Clean up
process.on('SIGINT', () => {
  process.exit();
});

