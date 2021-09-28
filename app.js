let inputDay = document.getElementById("day");
let inputMonth = document.getElementById("month");
let button = document.getElementById("submit");
let result = document.getElementById("section");
let dayInput = null;
let monthInput = null;
let monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let output = 0;
let month = 0;

function areInputsValid() {
  dayInput = inputDay.valueAsNumber;
  monthInput = inputMonth.valueAsNumber;

  if ((monthInput > 0) && (monthInput < 13)) {
    if (dayInput > 0 && dayInput <= monthArray[monthInput - 1]) {
      return true;
    } else {
      result.innerHTML = `<h3>Try again. Please insert a valid day, 1 to ${
        monthArray[monthInput - 1]
      }</h3>`;
    }
  } else {
    result.innerHTML =
      "<h3>Try again. Please insert a valid month, 1 to 12</h3>";
  }
}

function print() {
  areInputsValid();

  if (areInputsValid) {
    while (month < monthInput - 1) {
      output = output + monthArray[month];
      month = month + 1;
    }
    output = output + dayInput;
    result.innerHTML = `<h3>The given date ${dayInput}.${monthInput}.2021 is day ${output} of the year 2021 </h3>`;
  }
}
button.addEventListener("click", print);
