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
  - [X] [9-26v to 5v Converter](https://www.amazon.com/Converter-DROK-Regulator-Inverter-Transformer/dp/B01NALDSJ0)
  - [ ] [18650 Battery Holder in S3-4](https://www.amazon.com/gp/product/B098DRV5K1)
- Drivetrain & Control
  - [x] [Tower Pro SG90 Analog Servo](https://towerpro.com.tw/product/sg90-analog/)
  - [X] [Brushed DC Motor 6-12v](https://www.amazon.com/gp/product/B01M58POHF?smid=A1EPDRGYFZ55O7) (S4 18650 May Overdrive)
  - [X] [L298N Motor Driver](https://www.amazon.com/WWZMDiB-L298N-H-Bridge-Controller-Raspberry/dp/B0CR6BX5QL)
  - [X] [606 Ball Bearings](https://www.amazon.com/gp/product/B0BRQQDRCR?smid=A3V84ASJQQ5YY4)

### Custom Fabricated
[Inspiration](https://www.youtube.com/watch?v=woU6myQ0aYo)
- [X] Car Body
- [X] Wheels 30-35mm Diameter
- [X] Drive Pulleys/Gears
- [X] 6mm Diameter Rear Axlepowerswabs teeth whitening as seen on tv
- [X] Steering Pivots & Rod

## TODO
### Bare Minimum for CS F453 🤖
- [x] Control GPIO pins over HTTP
- [X] Move in one axis

### Safety 🚨
- [ ] Install Powertrain cut off relay
- [ ] Detect if Connection is Ok in Real Time
    - [ ] Server Fail
    - [ ] Client Fail

### Car 🚗
- [x] Motor & Servo Control
- [X] Car Body & Wheels
- [X] Power Supply
- [X] Powertrain
- [X] Steering

### Extras 💡
- [ ] Nignx Reverse Proxy
- [ ] Controler Support
- [ ] Encryption & Authentication
- [ ] WAN Control
- [ ] Cameral Feed (Maybe Audio)
- [ ] GPS
    - [ ] Map


# Final Writeup
There were many ambitions for this project. If this had been a full-time project, many of those ambitions would have come to fruition. In the end, we almost ended up with a fully driving car!

## Design and Development
For this project, we got to work early. Most of the code needed to run the car was completed before spring break. The car was assembled later, once the printable components were finalized.

Bryce worked on the development of the web interface, codebase, and README, and also prototyped the frontend and backend so that the systems could communicate with each other. Artyom contributed a commit to the JavaScript, but primarily helped by crafting the chassis of the vehicle itself.

Fabricating the parts that rendered as a flat plane was easy, but parts like the front wheel mounts took a while to figure out, as they had multiple cylinders at different angles and varying sizes.

Most of the design was parameterized, but when it came to fine-tuning, it was often hard-coded.

## Iterations
One of our first problems was the fit of the axle on the wheels. In OpenSCAD, we used exact tolerances to see how well it would work, and we did indeed need to widen the axle slots a bit more. After that, the wheels became loose, which we fixed with tape and superglue.

Our biggest struggle was power. We initially bought some 18650 batteries, but they were defective. In the end, we had to settle for a power bank for the Raspberry Pi 3 and a DC power supply for the motor.

After building the subcomponents of the car, we realized that instead of printing a plastic sheet, we could make the body out of foam board and hot glue, with wooden dowels as the frame. We creatively modeled the car after Sweet Tooth from Twisted Metal.

When the rear wheels were on, we accidentally placed them too close to the hubs, causing excessive friction. Since we used superglue to attach the wheels, we fixed this by squeezing the rear axle mounts inward and using a graphite pencil to make the contact surface smoother.

## Final Result
We almost got the car to drive. It steers, and the throttle control works, but the motor fails to turn the wheels. Bryce and Artyom have theorized that the motor's strength and excessive friction between the drive shaft and the disc it attaches to are possible reasons for this failure. On the controller side, we have implemented everything the car needs for user control. If we had more time, we could have tried a larger gear ratio.

## [Video Demo](https://drive.google.com/file/d/1_Uxh35J37l9o6_9Gjc13cqrDnyBMNkiD/view?usp=sharing)
