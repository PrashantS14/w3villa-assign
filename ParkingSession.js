class ParkingSession {
  constructor(vehicleNumber, startTime) {
    this.vehicleNumber = vehicleNumber;
    this.startTime = startTime;
    this.endTime = null;
  }

  endSession(endTime) {
    this.endTime = endTime;
  }

  getDurationInHours() {
    const diffMs = this.endTime - this.startTime;
    const diffHours = diffMs / (1000 * 60 * 60);

    return Math.ceil(diffHours); // round up
  }
}

module.exports = ParkingSession;