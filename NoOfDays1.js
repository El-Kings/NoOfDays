function getNumberOfDays(month) {
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      return 31;
    case "April":
    case "June":
    case "September":
    case "November":
      return 30;
    case "February":
      return 28; 
    default:
      return -1;
  }
}

let month = prompt("Enter month");
let numberOfDays = getNumberOfDays(month);

if (numberOfDays === -1) {
  console.log("Invalid month: " + month);
} else {
  console.log(month + " has " + numberOfDays + " days.");
}
