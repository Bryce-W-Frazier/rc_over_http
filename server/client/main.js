// main.js
// Interface client with server
// Bryce W. Frazier
// Started: 2026-01-31

// Open Web Socket With Werver
const socket = io();

// RC Control vars
let steer_vector = 0;

// Calculate User Input Vectors
window.addEventListener('keydown', () => {
  if (event.repeat) return;
  
  if (event.key == 'd') {
    socket.emit('steer-to', -500);
  } 
  if (event.key == 'a') {
    socket.emit('steer-to', 500);
  }

  socket.emit(steer-to, steer_vector);
});

window.addEventListener('keyup', () => {
  if (event.repeat) return;

  if (event.key == 'a' || event.key == 'd') {
    socket.emit('steer-to', 0);
  }
});

// Send Input Vectors to Server
/*setInterval(() => {
  socket.emit('steer-to', steer_vector);

  // Reset Input Vectors
  steer_vector = 0;
}, 50);*/
