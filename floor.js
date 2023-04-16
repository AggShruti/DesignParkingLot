const { CarSlot } = require("./carSlot");
const { Ticket } = require("./ticket");
const data = require("./constants.json");
const utils = require("./utils");

class Floor{
    constructor(total, truck=1, bike=2){
        this._id = ++Floor.floors;
        this.total = total;
        this.carSlots = [];
        for(let i=0; i<total-truck-bike; ++i){
            this.carSlots.push(new CarSlot());
        }
        this.numCarSlots = total-truck-bike;
        this.carAvailable = total-truck-bike;
    }
    static floors = 0;

    parkVehicle(type, registrationId, color){
        if(type === "car"){
            if(this.carAvailable > 0){
                this.carAvailable = this.carAvailable - 1;
                let ticket;
                for(let i=0; i<this.numCarSlots; ++i){
                    if(this.carSlots[i].checkAvailability()){
                        ticket = this.carSlots[i].parkVehicle(type, registrationId, color);
                        ticket.setFloor(this._id);
                        ticket.setSlot(i+data.CARMIN);
                        break;
                    }
                }
                return ticket;
            }
            else{
                 return false;
            }
        }

    }

    unParkVehicle(slotNo, ticketId) {
        try {
            if (data.CARMIN <= slotNo && slotNo <= this.total) {
                if (this.carSlots[slotNo - data.CARMIN] && this.carSlots[slotNo - data.CARMIN].ticket && this.carSlots[slotNo - data.CARMIN].ticket.getTicketNumber() === ticketId) {
                    this.carSlots[slotNo - data.CARMIN].unParkVehicle();
                    this.carAvailable++;
                }
                else{
                    throw "INVALID TICKET"
                }
            }
            else {
                throw "INVALID TICKET";
            }
        }
        catch (err) {
            utils.Error(err);
        }

    }

    printSlots(type, floorNumber){
        console.log(" Slots for car available are ",this.carAvailable, " on floor number ", floorNumber);
    }

    displyFreeSlots(type, floorNumber, isAvailable){
        if(type === "car"){
            let slots = [];
            for(let i=0; i < this.numCarSlots; ++i){
                if(isAvailable){
                    if(this.carSlots[i].checkAvailability()){
                        slots.push(data.CARMIN+i);
                    }
                }
                else{
                    if(!this.carSlots[i].checkAvailability()){
                        slots.push(data.CARMIN+i);
                    }
                }
            }
            
            console.log( "Slots on floor number: ", floorNumber, " : ", slots.toString());
            return;
        }
        console.log("PPP")
    }


}

module.exports.Floor = Floor;