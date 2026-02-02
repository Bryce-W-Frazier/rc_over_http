// main.js
// Interface client with server
// Bryce W. Frazier
// Started: 2026-01-31

const socket = io();

window.addEventListener('keydown', () => {
  if (event.repeat) return;
  
  if (event.key == 'd') {
    socket.emit('steer-to', -500);
  } else if (event.key == 'a') {
    socket.emit('steer-to', 500);
  }
});
