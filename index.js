const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const loginButton = document.querySelector(".login-btn");

const userLoginDetails = {
  Email: "appclick@gmail.com",
  Password: "1234AppClick"
};

loginButton.addEventListener("click", () => {
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;
  if(userEmail === userLoginDetails.Email && userPassword === userLoginDetails.Password) {
    alert("Login Successful!");
  } else if (userEmail === "" && userPassword === "") {
    alert("Enter Email and Password");
  } else if (userEmail === "") {
    alert("Enter an Email")
  } else if (userPassword === "") {
    alert("Enter a Password")
  }
  else  {
    alert("Incorrect Email or Password");
  }
    
  
}); 