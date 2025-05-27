/********* create variables *********/

let costPerDay = 35; // Initial cost is for a full day
let numberOfDaysSelected = 0;
let dayButtons = document.querySelectorAll('.day-selector li');
let fullDayButton = document.getElementById('full');
let halfDayButton = document.getElementById('half');
let clearButton = document.getElementById('clear-button');
let calculatedCostElement = document.getElementById('calculated-cost');
let clickedClass = 'clicked';

/********* colour change days of week *********/



function clickHandlerFor(button) {
  return function handleClick() {
      if (button.classList.contains(clickedClass)) {
          button.classList.remove(clickedClass);
          numberOfDaysSelected--;
      } else {
          button.classList.add(clickedClass);
          numberOfDaysSelected++;
      }

      calculateTotalCost();
  };
}

// Function to assign handlers to all day buttons
function setupAllDayButtons() {
  for (let i = 0; i < 5; i++) {
      let button = dayButtons[i];
      let handler = clickHandlerFor(button);
      button.addEventListener('click', handler);
  }
}

// Initialize everything
setupAllDayButtons();
/********* clear days *********/


function clearAllDays() {
    for (let i = 0; i < 5; i++) {
        dayButtons[i].classList.remove(clickedClass);
    }
    numberOfDaysSelected = 0;
    calculateTotalCost();
}
  
  clearButton.addEventListener('click', clearAllDays);




/********* change rate *********/

function selectHalfDay() {
    costPerDay = 20;
    halfDayButton.classList.add(clickedClass);
    fullDayButton.classList.remove(clickedClass);
    calculateTotalCost();
  }

  halfDayButton.addEventListener('click', selectHalfDay);


function selectFullDay() {
    costPerDay = 35;
    fullDayButton.classList.add(clickedClass);
    halfDayButton.classList.remove(clickedClass);
    calculateTotalCost();
}
  

fullDayButton.addEventListener('click', selectFullDay);
  




/********* calculate *********/

function calculateTotalCost() {
    var totalCost = numberOfDaysSelected * costPerDay;
    calculatedCostElement.innerHTML = totalCost;
}

