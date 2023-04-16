const { Vehicle } = require("./vehicle");

class Ticket{
    constructor(){

    }

    static createTicket(type, registrationId, color){
        let ticket = new Ticket();
        ticket.vehicle = Vehicle.addVehicle(type, registrationId, color);
        return ticket;
    }

    setParkingLot(parkinglotId){
        this.parkinglotId = parkinglotId;
    }

    getTicketNumber(){
        return  this.parkinglotId.toString() + "_" + this.floorNumber.toString() + "_" + this.slotNo.toString();
    }

    setFloor(floor){
        this.floorNumber = floor;
    }
    setSlot(slot){
        this.slotNo = slot;
    }
}

module.exports.Ticket = Ticket;