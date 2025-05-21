// Your code here
function greet() {
  var personName = prompt("What is your name?");
  if (personName) {
    alert("Hello, " + personName);

    var ageString = prompt("How old are you?");
    var age = parseInt(ageString);

    var personBday = confirm("Have you had your birthday this year?");
    var currentYear = new Date().getFullYear();

    let birthYear;
    if (personBday) {
      birthYear = currentYear - age;
    } else {
      birthYear = currentYear - age - 1;
    }
    alert("You were born in " + birthYear);
  }
}
