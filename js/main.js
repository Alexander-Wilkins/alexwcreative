console.log("Javascript is running... 🐠");

let today = new Date();
let day = today.getDay();
let daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
let date =
  today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
let dateTime = date;

document.getElementById(
  "displayDateTime"
).innerHTML = `${daylist[day]} ${dateTime}`;
