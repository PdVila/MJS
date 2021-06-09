let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0, //this will update
    checkAvailability: function(partySize){ //Has access properties using .this
        let seatsLeft = this.guestCapacity - this.guestCount
        console.log(`There are now ${seatsLeft} seats left`);
        return partySize >= seatsLeft; //Party size is not greater than seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize;
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize;
    }
}

// seatParty
// removeParty

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4)) //Return false
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4)) //Return true now 
