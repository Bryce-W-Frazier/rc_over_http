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
  - [x] 7-12 to 5v Converter
  - [ ] [18650 Battery Holder in S2-4](https://www.amazon.com/gp/product/B098DRV5K1)
- Drivetrain & Control
  - [x] [Tower Pro SG90 Analog Servo](https://towerpro.com.tw/product/sg90-analog/)
  - [ ] [Brushed DC Motor 6-12v](https://www.amazon.com/gp/product/B01M58POHF?smid=A1EPDRGYFZ55O7) (S4 18650 May Overdrive)
  - [ ] [L298N Motor Driver](https://www.amazon.com/WWZMDiB-L298N-H-Bridge-Controller-Raspberry/dp/B0CR6BX5QL)
  - [ ] [606 Ball Bearings](https://www.amazon.com/gp/product/B0BRQQDRCR?smid=A3V84ASJQQ5YY4)

### Custom Fabricated
[Inspiration](https://www.youtube.com/watch?v=woU6myQ0aYo)
- [ ] Car Body
- [ ] Wheels 30-35mm Diameter
- [ ] Drive Pulleys/Gears
- [ ] 6mm Diameter Rear Axle
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
