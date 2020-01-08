// budget controller
let budgetController = (function() {
  // some code
})();

// ui controller
let UIController = (function() {
  // some code
})();

// global app controller
let controller = (function(budgetCtrl, UICtrl) {
  let ctrlAddItem = function() {
    // 1. get the filed input data
    // 2. add the item to the budget controller
    // 3. add the item to UI
    // 4. calculate the budget
    // 5. display the budge on the UI
    console.log("it works");
  };
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  // event listener on enter key press
  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    } else {
      console.log("some other key");
    }
  });
})(budgetController, UIController);
