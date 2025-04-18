/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35; // Initial cost is for a full day
let numberOfDaysSelected = 0;
let dayButtons = document.querySelectorAll('.day-selector li');
let fullDayButton = document.getElementById('full');
let halfDayButton = document.getElementById('half');
let clearButton = document.getElementById('clear-button');
let calculatedCostElement = document.getElementById('calculated-cost');
let clickedClass = 'clicked';

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
// function handleDayClick() {
    

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
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearAllDays() {
    for (let i = 0; i < 5; i++) {
        dayButtons[i].classList.remove(clickedClass);
    }
    numberOfDaysSelected = 0;
    calculateTotalCost();
}
  
  clearButton.addEventListener('click', clearAllDays);




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function selectHalfDay() {
    costPerDay = 20;
    halfDayButton.classList.add(clickedClass);
    fullDayButton.classList.remove(clickedClass);
    calculateTotalCost();
  }

  halfDayButton.addEventListener('click', selectHalfDay);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function selectFullDay() {
    costPerDay = 35;
    fullDayButton.classList.add(clickedClass);
    halfDayButton.classList.remove(clickedClass);
    calculateTotalCost();
}
  

fullDayButton.addEventListener('click', selectFullDay);
  




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateTotalCost() {
    var totalCost = numberOfDaysSelected * costPerDay;
    calculatedCostElement.innerHTML = totalCost;
}

