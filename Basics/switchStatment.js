const day = "Wednesay";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
  case "Thurday":
    console.log("Today is Thursday or Wednesday");
    break;

  case "Friday":
    console.log("Today is Friday");
    break;

  case "Saturday":
  case "Sunday":
    console.log("Enjoy the Weekend");
    break;

  default:
    console.log("Invalid Day");
    break;
}
