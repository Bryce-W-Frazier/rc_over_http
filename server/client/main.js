// main.js
// Interface client with server
// Bryce W. Frazier
// Started: 2026-01-31

// Open Web Socket With Werver
const socket = io();

let changed = false; //TODO notifiy server only if input changes

//Key Tracker
const Keys = {};

window.addEventListener("keydown", (e) => Keys[e.code] = true);
window.addEventListener("keyup", (e) => Keys[e.code] = false);


// Calculate User Input Vectors
window.setInterval( () => {
  let steer_vector = 0;
  
  if (Keys["KeyD"]) {
    steer_vector += 500;
  } 
  if (Keys["KeyA"]) {
    steer_vector += -500;
  }

  socket.emit('steer-to', steer_vector);
}, 10);


