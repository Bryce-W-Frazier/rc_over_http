// server.js
// Run RC Control System
// Bryce W. Frazier
// 2026-01-31

// ############################################################
// Init 
// ############################################################

// HTTP init
/*const express = require('express');
const path = require('path');*/
import express from 'express';
import path from 'path';
const app = express();

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Socket init
/*const http = require('http');
const { Server } = require('socket.io');*/
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

/*app.listen(3000, () => {
  console.log("this is a server");
});*/



// ##########################################################
// Main Section
// ##########################################################


io.on('connection', (socket) => {
  console.log('Client connected');

  // Listen for 'move-servo' event from browser
  socket.on('steer-to', (steer_vector) => {
    steer(steer_vector);
    console.log(`Moving to ${steer_vector}us`);
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

