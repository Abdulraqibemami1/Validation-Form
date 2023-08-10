const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
document.getElementById("toggle").addEventListener("click", (e) => {
  if (e.target.value === "Dark") {
    document.querySelector(".container").style.background = "#232433";
    document.body.style.background = "#232433";
    e.target.value = "Light";
  } else {
    document.querySelector(".container").style.background = "#888";
    document.body.style.background = "#888";
    e.target.value = "Dark";
  }
});

// Showing Success Function
function showSuccess(input) {
  const container = input.parentElement;
  input.classList = "form-control success";
  const small = (container.querySelector("small").style.visibility = "hidden");
}
// showing  Error Function
function showError(input, message) {
  const container = input.parentElement;
  input.classList = "form-control error";
  const small = container.querySelector("small");
  small.style.visibility = "visible";
  small.innerHTML = message;
}

// check the length of the All Fields
function checklength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} should be at least ${min} Character`);
  } else if (input.value.length > max) {
    showError(input, ` ${input.id} should be less than ${max} character `);
  } else {
    showSuccess(input);
  }
}

// check th Password and it's Confirm is correct or no
function checkPassword(input1, input2) {
  if (input1.value == input2.value) {
    showSuccess(input2);
  } else {
    showError(input2, "password Should match");
  }
}
// Check The Email is valid or no
function checkEmail(input) {
  const req =
    /^([a-zA-Z]{1,2})([a-zA-Z0-9]{3,16})@([a-zA-Z]{5,10})\.([a-zA-Z]{2,8})$/;
  if (req.test(email.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is Not Valid..");
  }
}
form.addEventListener("submit", function (e) {
  checklength(username, 3, 15);
  checklength(password, 6, 15);
  checkEmail(email);
  checkPassword(password, password2);
  e.preventDefault();
});
