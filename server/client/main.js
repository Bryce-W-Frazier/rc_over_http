 const btn = document.getElementById('myButton');
  window.addEventListener('keydown', () => {
  
  if (event.key == 'w') {
    // Send a POST request to the Node.js server
    fetch('/throttle', { method: 'POST' })
      .catch(err => console.error(err));
  }

  if (event.key == 'd') {
    fetch('/steer_left', { method: 'POST' })
      .catch(err => console.error(err));
  } else if (event.key == 'a') {
    fetch('/steer_right', { method: 'POST' })
      .catch(err => console.error(err));
  } else {
    fetch('/steer_center', { method: 'POST' })
      .catch(err => console.error(err));
  } 
});
