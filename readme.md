# RC Car Over HTTP 

## Dependencies
### System
- Raspberry Pi 3 B, Not Tested on 1B, 2B, 4B, and 5B
- Debian 13 ARM 64, Not Tested on other Debian Systems or 32 ARM

### Apt Packages
- pigpio
- nodejs
- npm

### NPM Packages in /var/node
- express 5.2.1
- pigpio 3.3.1
- pm2 6.0.14
- socket.io 4.8.3
- nodemon 3.1.11 (For Testing)

## Parts
### Pre-Fabricated
- [x] [Rasberry Pi 3 B](https://www.raspberrypi.com/products/raspberry-pi-3-model-b/)
- Power
  - [ ] [7.4v to 5v Converter](https://www.dfrobot.com/product-2240.html)
  - [ ] [18650 Battery Holder in S2-4](https://www.amazon.com/gp/product/B098DRV5K1)
- Drivetrain & Control
  - [x] [Tower Pro SG90 Analog Servo](https://towerpro.com.tw/product/sg90-analog/)
  - [ ] Brushed DC Motor 7.4v to 16.8v
  - [ ] Brushed DC ESC 7.4v to 16.8v
  - [ ] Bearings

### Custom Fabricated
[Inspiration](https://www.youtube.com/watch?v=woU6myQ0aYo)
- [ ] Car Body
- [ ] Wheels
- [ ] Drive Pulleys/Gears
- [ ] Rear Axle
- [ ] Steering Pivots & Rod

## TODO
### Bare Minimum for CS F453 🤖
- [x] Control GPIO pins over HTTP
- [ ] Move in one axis

### Bare Minimum for CS F372 🚧
- [ ] Fix NPM Vulnerabilities
- [ ] Figure out if Fesiable
- [ ] Figure out Bare Minimum

### Safety 🚨
- [ ] Install Powertrain cut off relay
- [ ] Detect if Connection is Ok in Real Time
    - [ ] Server Fail
    - [ ] Client Fail

### Car 🚗
- [x] Motor & Servo Control
- [ ] Car Body & Wheels
- [ ] Power Supply
- [ ] Powertrain
- [ ] Steering

### Extras 💡
- [ ] Nignx Reverse Proxy
- [ ] Controler Support
- [ ] Encryption & Authentication
- [ ] WAN Control
- [ ] Cameral Feed (Maybe Audio)
- [ ] GPS
    - [ ] Map
