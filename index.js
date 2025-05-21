// Your code here
function greet() {
  var personName = prompt("What is your name?");
  if (personName) {
    alert("Hello, " + personName);
  }
}

function age(ageNum) {
  const age = parseInt(ageNum);
  if (ageNum) {
    return "Age: " + ageNum;
  }
}
