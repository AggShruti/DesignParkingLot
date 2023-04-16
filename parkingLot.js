const { Floor } = require("./floor");
const util = require("./utils");

class ParkingLot{
    constructor(){
        this._id = ++ParkingLot.count;
    }

    static count = 0;
    availableSlots;
    

    static createParkingLot(floors, slots){
        let lot = new ParkingLot();
        lot.floors = [];
        for(let i=0; i< floors; ++i){
            lot.floors.push(new Floor(10));
        }
        return lot;
    }

    parkVehicle(type, registrationId, color){
        if(type === "car"){
            let isAvailble = false;
            for(let i=0;i<this.floors.length; ++i){
                let ticket = this.floors[i].parkVehicle(type, registrationId, color);
                if(ticket){
                    isAvailble = true;
                    ticket.setParkingLot(this._id);
                    return;
                }
            }
            if(isAvailble === false){
                console.log("Parking Lot Full");
            }
        }
    }

    unParkVehicle(ticketNo) {
        try {
            let ticket = ticketNo.split("_");
            let parkingLotId = parseInt(ticket[0]);
            let floorNumber = parseInt(ticket[1]);
            let slotNo = parseInt(ticket[2]);
            if (this.floors.length >= floorNumber ) {
                this.floors[floorNumber-1].unParkVehicle(slotNo, ticketNo);
            }
            else {
                throw "Invalid Ticket";
            }

        }
        catch (err) {
            util.Error(err);
        }
    }

    numberOfFreeSlots(type){
        try{
            for(let i=0; i<this.floors.length; ++i){
                this.floors[i].printSlots(type, i+1);
            }
            

        }
        catch(err){
            util.Error(err);
        }
    }

    displayFreeSlots(type, isAvailable){
        try{
            for(let i=0; i<this.floors.length; ++i){
                this.floors[i].displyFreeSlots(type, i+1, isAvailable);
            }
        }
        catch(err){
            util.Error(err);
        }
    }
}

module.exports.ParkingLot = ParkingLot;