const firstName = "Ishan";
const lastName = "Moorjmalani";
const birthYear = 2001;
const currentYear = 2023;

console.log(firstName + " " + lastName);

// below are template literals that can be used to use to to work with string along with variables easily otherwise we have to maintain lots of space and other concatenatin adn syntax issue if done the traditional way , es6 feature
console.log(
  `I am ${firstName} ${lastName}. 
   I am ${currentYear - birthYear} years old.`
);

// you can also use /n for new line like it used to be in other common programming languages like java,python,js
