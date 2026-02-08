// bearingtest.scad
// Body of the car and it's conponets
// units in mm
// Bryce W. Frazier
// 2026-02-06

// 606 Bearing
bearing_d = 17;
inner_bearing_d = 6;
bearing_w = 6;

rear_mount_thic = 3;
rear_mount_d = bearing_d+rear_mount_thic;

// Motor Specs
motor_l = 47;
motor_d = 28;

motor_mount_w = motor_d+2;
motor_strap_w = 13;
motor_strap_gap = 2;

// Body Specs
body_w = 80;
body_l = 125;
body_thic = 4;
axel_access = 12;
wheel_lift = 2;


module rearBearingMount() { 
    translate([0, rear_mount_d, -wheel_lift-rear_mount_d/2])
    rotate([90, 0, 90]) {
        difference() {
            union() {
                cylinder(h=bearing_w, d = rear_mount_d);
                
                translate([0, rear_mount_d/2, 0])
                    cylinder(h=bearing_w, d =rear_mount_d*2);
           }
           translate([0, rear_mount_d, bearing_w/2])
                    cube([rear_mount_d*2, rear_mount_d, bearing_w], center=true); 
           cylinder(h=bearing_w, d=bearing_d);
        }
        translate([0, (rear_mount_d + wheel_lift)/2, bearing_w/2])
            cube([rear_mount_d*2, wheel_lift, bearing_w], center=true);
    }
}

module axle() {
    axel_d = 6;
    axel_l = 20;
    
    translate([0, 0, axel_d/4])
    rotate([0, -90, 90])
        difference() {
            cylinder(h=axel_l, d=axel_d);
            
            translate([-(axel_d*3)/4, 0, axel_l/2])
                cube([axel_d, axel_d, axel_l], center=true);
        }
}

module motorMount() {
    translate([0, motor_mount_w/2, motor_mount_w/2])
    rotate([90, 0, 90])
    difference() {
        translate([0, -motor_mount_w/4, motor_l/2])
            cube([motor_mount_w, motor_mount_w/2, motor_l], center=true);
        cylinder(h=motor_l, d=motor_d);
    };
}

module steering_wheel_mount() {
    dist_from_body = rear_mount_d/2 + rear_mount_thic + wheel_lift;
    
    cylinder(h=body_thic+4, d=inner_bearing_d);
    translate([0, 0, -dist_from_body]) {
        cylinder(h=dist_from_body, d=inner_bearing_d);
        rotate([0,-90,0])
            cylinder(h=10, d=rear_mount_d);
    }
}

module mainBody() {

    difference(){
        union() {
            cube([body_w, body_l, body_thic], center=false);
            
    // Drive Train ################################################
            // Axle Mount
            rearBearingMount();
            translate([body_w - bearing_w, 0, 0]) rearBearingMount();
        }
    // Access of Axle for Beltdrive
    translate([bearing_w, rear_mount_d/4, 0]) 
        cube([axel_access, (rear_mount_d*3)/2, body_thic]);
    
    // Motor Straps
    translate(
    [bearing_w + axel_access + motor_l/8, rear_mount_d/4 - motor_strap_gap, 0])
        cube([motor_strap_w, motor_strap_gap, body_thic]);    
    translate(
    [bearing_w + axel_access + 7*motor_l/8, rear_mount_d/4 - motor_strap_gap, 0])
        cube([motor_strap_w, motor_strap_gap, body_thic]);   
    translate(
    [bearing_w + axel_access + motor_l/8, rear_mount_d/4 + (rear_mount_d*3)/2, 0])
        cube([motor_strap_w, motor_strap_gap, body_thic]);    
    translate(
    [bearing_w + axel_access + 7*motor_l/8, rear_mount_d/4 + (rear_mount_d*3)/2, 0])
        cube([motor_strap_w, motor_strap_gap, body_thic]); 
        
    // Steering ###################################################
    // Bearing Holes
    translate([bearing_d/2+3, body_l - bearing_d/2-3, 0])
        cylinder(h=bearing_w, d=bearing_d);
    translate([body_w-(bearing_d/2+3), body_l - (bearing_d/2+3), 0])
        cylinder(h=bearing_w, d=bearing_d);      
    
    } // End of difference()
    
    translate([bearing_d/2+3, body_l - (bearing_d/2+3), 0])
    difference() {
        cylinder(h=bearing_w, d=bearing_d+3);
        cylinder(h=bearing_w, d=bearing_d);
    };
    translate([body_w-(bearing_d/2+3), body_l - (bearing_d/2+3), 0])
    difference() {
        cylinder(h=bearing_w, d=bearing_d+3);
        cylinder(h=bearing_w, d=bearing_d);
    };
    
    translate([bearing_d/2+3, body_l- bearing_d/2-3, bearing_w])
        difference() {
            cylinder(h=2, d=bearing_d+3);
            cylinder(h=2, d=(inner_bearing_d+bearing_d)/2);
        }
    translate([body_w-(bearing_d/2+3), body_l- bearing_d/2-3, bearing_w])
        difference() {
            cylinder(h=2, d=bearing_d+3);
            cylinder(h=2, d=(inner_bearing_d+bearing_d)/2);
        }
    
}

module wholeCar () {
    mainBody();
    
    // Powertrain
    translate([bearing_w + axel_access + motor_l/8, rear_mount_d/4, body_thic])
        motorMount();
    
    // Steering
    translate([bearing_d/2+3, body_l- bearing_d/2-3, 3])
        steering_wheel_mount();
    translate([body_w-(bearing_d/2+3), body_l- bearing_d/2-3, 3])
    rotate([0, 0, 180])
        steering_wheel_mount();
}



wholeCar();
//rearBearingMount();