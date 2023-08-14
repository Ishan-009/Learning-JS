const Ishan = {
  firstName: "Ishan",
  lastName: "Moorjmalani",
  contact: 6351414926,
  friends: ["Michael", "Raman", "Ram"],
};

// Accessing Object using dot and bracket Notation

// Accessing through Dot Notation

console.log("Dot Notation =>", Ishan.firstName);

// Accessing through Bracket Notation

console.log("Bracket Notation =>", Ishan["firstName"]);

// Differences

// In Dot notation we have to pass actual property value manually ,
// adn in bracket nottation we have to pass actual property value or else
// or else
// we can pass expression that computes and  produces actual property/key value/name

// Challenge using object

console.log(
  `${Ishan.firstName} has ${Ishan.friends.length} friends and his best friend is called ${Ishan.friends[0]}`
);

// Adding more property to the Ishan object using both dot adn bracket notation

Ishan.location = "Vadodara";

Ishan["address"] =
  "B-45 Inderlok Soc, Behind Dhobhi Talav, Warashiya, Vaddoara";

console.log(Ishan);
