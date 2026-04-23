const ParkingLot = require("./ParkingLot");

const parking = new ParkingLot(2);

parking.startParking("UP32AB1234");
parking.startParking("UP32CD5678");

parking.startParking("UP32EF9999");

setTimeout(() => {
  parking.endParking("UP32AB1234");
}, 3000);

setTimeout(() => {
  parking.endParking("UP32CD5678");
}, 5000);