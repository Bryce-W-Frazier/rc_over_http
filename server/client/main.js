const socket = io();

window.addEventListener('keydown', () => {
  if (event.repeat) return;
  
  if (event.key == 'd') {
    socket.emit('steer-to', -500);
  } else if (event.key == 'a') {
    socket.emit('steer-to', 500);
  }
});
