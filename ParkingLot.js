const ParkingSession = require("./ParkingSession");

class ParkingLot {
  constructor(capacity) {
    this.capacity = capacity;
    this.activeSessions = new Map();
  }

  startParking(vehicleNumber) {
    if (this.activeSessions.size >= this.capacity) {
      console.log("Parking Full. Entry Denied.");
      return;
    }

    if (this.activeSessions.has(vehicleNumber)) {
      console.log("Vehicle already parked.");
      return;
    }

    const session = new ParkingSession(vehicleNumber, new Date());
    this.activeSessions.set(vehicleNumber, session);

    console.log(`Parking started for ${vehicleNumber}`);
  }

  endParking(vehicleNumber) {
    const session = this.activeSessions.get(vehicleNumber);

    if (!session) {
      console.log("Vehicle not found.");
      return;
    }

    session.endSession(new Date());

    const hours = session.getDurationInHours();
    const bill = this.calculateBill(hours);

    this.activeSessions.delete(vehicleNumber);

    console.log(`Vehicle: ${vehicleNumber}`);
    console.log(`Duration: ${hours} hour(s)`);
    console.log(`Bill: ₹${bill}`);
  }

  calculateBill(hours) {
    if (hours <= 1) return 30;
    return 30 + (hours - 1) * 10;
  }
}

module.exports = ParkingLot;