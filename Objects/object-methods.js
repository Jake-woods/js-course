const restaurant = {
   name: 'ASB',
   guestCapacity: 75,
   guestCount: 0,
   checkAvailability: function (partySize) {
      const seatsLeft = this.guestCapacity - this.guestCount;
      return partySize <= seatsLeft;
   },
   // Challenge area
   seatParty: function (partySize) {
      this.guestCount += partySize;
   },
   // Challenge area
   removeParty: function (partySize) {
      this.guestCount -= partySize;
   }
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability());
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));