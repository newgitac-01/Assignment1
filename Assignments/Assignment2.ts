
// Customer details
let customerName:string = "Mr. John Doe,";
let creditScore:number = 650;
let income:number = 55000;
let isEmployed:boolean = true;
let debtToIncomeRatio:number = 45;

// Function
function checkLoan() {

  if (creditScore > 750) {
      console.log("Hello: "+customerName, "Congratulation!");
    console.log("Your Loan application is Approved.");
  }

  else if (creditScore >= 650 && creditScore <= 750) {

    if (income >= 55000) {

      if (isEmployed == true) {

        if (debtToIncomeRatio < 40) {
            console.log("Hello: "+customerName, "Congratulation!");
          console.log("Your Loan application is Approved.");
        } else {
             console.log("Hello:"+customerName, "Sorry!");
          console.log("Your Loan application Denied due to High DTI.");
        }

      } else {
           console.log("Hello:"+customerName, "Sorry!");
        console.log("Loan Denied - You are not an Employed.");
      }

    } else {
         console.log("Hello:"+customerName, "Sorry!");
      console.log("Loan Denied - Your Income is low.");
    }

  }

  else {
       console.log("Hello:"+customerName);
    console.log("Loan Denied - Your Credit Score is low");
  }

}

// Calling function
checkLoan();