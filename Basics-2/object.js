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

// console.log(
// `${Ishan.firstName} has ${Ishan.friends.length} friends and his best friend is called ${Ishan.friends[0]}`
// );

// Here JS executes "." and "[]" operation staTEMENT from left to right beaause of oprator precedence by js , adn here . operator has higher prority thens bracket so it will code with . operator adn then bracket , you can see in above code example,

// in that example it executes dot notation for friends property and then we get array and then it performs bracket notation function in an array , i.e. :- Ishan.friends[0];

// Object Methods

const Ravi = {
  firstName: "Ravi",
  lastName: "Patel",
  contact: 6351414926,
  friends: ["Michael", "Raman", "Ram"],
  birthYear: 2001,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  hasDrivingLicense: true,

  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} years old and he has ${
      this.hasDrivingLicense === true ? "a" : "no"
    } driving license.`;
  },
};

console.log(Ravi.getSummary());
