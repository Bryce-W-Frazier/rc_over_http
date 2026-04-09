// main.js
// Interface client with server
// Bryce W. Frazier
// Started: 2026-01-31

// Open Web Socket With Werver
const socket = io();

// UI Connection Status
socket.on('connect', () => { console.log("Connected to the car!"); });
socket.on('disconnect', () => { console.log("CONNECTION LOST OH GOD"); });

//Key Tracker
const Keys = {};
let prevSteer = 0;
let prevThrottle = 0;

window.addEventListener("keydown", (e) => Keys[e.code] = true);
window.addEventListener("keyup", (e) => Keys[e.code] = false);


// Calculate User Input Vectors
window.setInterval( () => {
  let steer_vector = 0;
  let throttle = 0;
 
  //Steering
  if (Keys["KeyD"]) steer_vector += -500;
  if (Keys["KeyA"]) steer_vector += 500;

  //Throttle
  if (Keys["KeyW"]) throttle += 100;

  //Send Inputs if value changed
  if (steer_vector !== prevSteer) {
    socket.emit('steer-to', steer_vector);
    prevSteer = steer_vector;
  }

  if (throttle !== prevThrottle) {
    socket.emit('throttle-to', throttle);
    prevThrottle = throttle;
  }
}, 10);

// Failsafe
window.setInterval(() => {
  socket.emit('handshake');
}, 50); // Check for life every 50 ms