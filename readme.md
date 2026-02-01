# RC Car Over HTTP 

## Dependencies
### System
- Raspberry Pi 3B
      - Not Tested on 1B, 2B, 4B, and 5B
- Debian 13 ARM 64
      - Not Tested on other Debian Systems or 32 ARM

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
- [ ] Motor & Servo Control
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
