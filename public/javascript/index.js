console.log("\n\rscript loaded....\n\r");

// let signup = document.querySelector("#btnSignup");
let signupFormDiv = document.querySelector("#signup-form");
let loginFormDiv = document.querySelector("#login-form");

function showSignUp() {
  console.log("SignUp bnt clicked.....");
  debugger;
  if (signupFormDiv.classList.contains("show-signup")) {
    console.log("class found");
    signupFormDiv.classList.remove("signup-form");
    loginFormDiv.classList.remove("signup-form");
    loginFormDiv.classList.add("hideForm");
    signupFormDiv.classList.add("show-signup");
  } else {
    signupFormDiv.classList.remove("signup-form");
    loginFormDiv.classList.add("hideForm");
    signupFormDiv.classList.add("show-signup");
  }
}

function showLogin() {
  console.log("login bnt clicked.....");
  if (loginFormDiv.classList.contains("show-signup")) {
    console.log("class found");
    loginFormDiv.classList.remove("show-signup");
    signupFormDiv.classList.remove("show-signup");
    signupFormDiv.classList.add("hideForm");
    loginFormDiv.classList.add("show-signup");
  } else {
    signupFormDiv.classList.add("hideForm");
    signupFormDiv.classList.remove("show-signup");
    loginFormDiv.classList.add("show-signup");
  }
}
