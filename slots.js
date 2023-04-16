class Slot{
    constructor(){
        if(this.constructor === Slot){
            throw "Error";
        }
    }

    parkVehicle(){
        throw "Error";
    }
}

module.exports.Slot = Slot;