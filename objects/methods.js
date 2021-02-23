let restaurant = {
    name: "FunTimes HappyTimes",
    guestCapacity: 75,
    guestCount: 0,
    // method
    checkAvailability: function (partySize){
        let seats = this.guestCount + partySize 
        if (seats < this.guestCapacity) {
            this.guestCount += partySize
            return true
        }
    },
    removeParty: function (partySize){
        this.guestCount -= partySize
    }
}

if (restaurant.checkAvailability(5)){
    console.log(`${restaurant.name} has availabilty for your party with ${restaurant.guestCount} guests seated`)
}

restaurant.removeParty(2)
if (restaurant.checkAvailability(5)){
    console.log(`${restaurant.name} has availabilty for your party with ${restaurant.guestCount} guests seated`)
}
    