const { Slot } = require("./slots");
const { Ticket } = require("./ticket");

class CarSlot extends Slot{
    constructor(){
        super();
        this.isAvailable = true;
    }

    checkAvailability(){
        return this.isAvailable;
    }
    parkVehicle(type, registrationId, color){
        this.isAvailable = false;
        this.ticket = Ticket.createTicket(type, registrationId, color);
        return this.ticket;
    }
    unParkVehicle(){
        if(this.isAvailable === false){
            this.isAvailable = true;
        }
        else{
            throw "Slot is not Occupied";
        }
    }

    getTicket(){
        return this.ticket;
    }
}

module.exports.CarSlot = CarSlot;