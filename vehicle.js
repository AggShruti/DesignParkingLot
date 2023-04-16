class Vehicle{
    constructor(){
        this.vehicleId
    }

    static vehicles = 0;

    static addVehicle(registrationId, type, color){
        let vehicle = new Vehicle();
        vehicle.registrationId = registrationId;
        vehicle.type = type;
        vehicle.color = color;
        return vehicle;
    }

}

module.exports.Vehicle = Vehicle;