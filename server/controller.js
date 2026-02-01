// controller.js
// Manage GPIO Pins to controll car
// Bryce W. Frazier
// Started: 2026-02-01

//Gpio init
const Gpio = require('pigpio').Gpio;
const led  = new Gpio(4, { mode: Gpio.OUTPUT });
const steering = new Gpio(18, {mode: Gpio.OUTPUT});
