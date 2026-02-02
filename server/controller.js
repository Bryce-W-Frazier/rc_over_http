// controller.js
// Manage GPIO Pins to controll car
// Bryce W. Frazier
// Started: 2026-02-01

//Gpio init
//const Gpio = require('pigpio').Gpio;
import pkg from 'pigpio';
const { Gpio } = pkg;

const steering = new Gpio(18, {mode: Gpio.OUTPUT});
const throttle = new Gpio(26, {mode: Gpio.OUTPUT});

// Input and output ranges
const servo_pulse_range = [500, 2400];
const steer_vector_range = [-500, 500];

const throttle_pwm_range = [0, 255];
const throttle_level_range = [0, 100];

// function mapRange
// Take value and apply it to a differnt range
function mapRange(value, oldRange, newRange) {
  return ((value - oldRange[0]) * (newRange[1] - newRange[0]) / (oldRange[1] - oldRange[0])) + newRange[0];
}

export const Controller = {
  // function steer
  // take steer vector, convert to pwm and move steer servo
  steer: function (steer_vector) {
    steering.servoWrite( mapRange(steer_vector, steer_vector_range, servo_pulse_range) );
  },

  setThrottle: function (throttle_level) {
    throttle.pwmWrite(mapRange(throttle_level, throttle_level_range, throttle_pwm_range) );
  },
}
