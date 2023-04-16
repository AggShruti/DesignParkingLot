const { CarSlot } = require("./carSlot");
const { ParkingLot } = require("./parkingLot");


let parkinglot = ParkingLot.createParkingLot(10, 10);

parkinglot.parkVehicle("car", "000", "red");

// parkinglot.unParkVehicle("1_1_4");

// parkinglot.numberOfFreeSlots("car");

parkinglot.displayFreeSlots("car", false);