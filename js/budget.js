class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budgetFeedback");
    this.paymentFeedback = document.querySelector(".paymentFeedback");
    this.formBudget = document.getElementById("formBudget");
    this.budgetInfo = document.getElementById("budgetInfo");
    this.budgetAmount = document.getElementById("budgetAmount");
    this.formPayment = document.getElementById("formPayment");
    this.paymentInfo = document.getElementById("paymentInfo");
    this.paymentAmount = document.getElementById("paymentAmount");
    this.currentBalance = document.getElementById("currentBalance");
    this.balanceAmount = document.getElementById("balanceAmount");
    this.paymentList = document.getElementById("paymentList");
    this.listItem = [];
    this.itemID = 0;
  }

  //submit budget method
  submitFormBudget() {
    const value = this.budgetInfo.value;
    if (value === "" || value < 0) {
      this.budgetFeedback.classList.add("showItem");
      this.budgetFeedback.innerHTML =
        "<p>value cannot be empty or negative</p>";
      const self = this;
      // console.log(this);

      setTimeout(function() {
        self.budgetFeedback.classList.remove("showItem");
      }, 3000);
    } else {
      this.budgetAmount.textContent = value;
      this.budgetInfo.value = "";
      this.showBalance();
    }
  }

  //show balance
  showBalance() {
    const payment = this.totalPayment();
    const total = parseInt(this.budgetAmount.textContent) - payment;
    this.balanceAmount.textContent = total;
    if (total < 0) {
      this.currentBalance.classList.remove("showGreen", "showBlue");
      this.currentBalance.classList.add("showRed");
    } else if (total > 0) {
      this.currentBalance.classList.remove("showRed", "showBlue");
      this.currentBalance.classList.add("showGreen");
    } else if (total === 0) {
      this.currentBalance.classList.remove("showRed", "showGreen");
      this.currentBalance.classList.add("showBlue");
    }
  }
  
  //total payments
  totalPayment() {
    let total = 300;
    return total;
  }
}

function eventListeners() {
  const formBudget = document.getElementById("formBudget");
  const formPayment = document.getElementById("formPayment");
  const paymentList = document.getElementById("paymentList");

  //New inctance of UI class
  const ui = new UI();

  //Budget form submit
  formBudget.addEventListener("submit", function(event) {
    event.preventDefault();
    ui.submitFormBudget();
  });

  //Expense form submit
  formPayment.addEventListener("submit", function() {
    event.preventDefault();
  });

  //PaymentList click
  paymentList.addEventListener("click", function(event) {});
}

document.addEventListener("DOMContentLoaded", function() {
  eventListeners();
});
