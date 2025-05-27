document.getElementById("btn-login").addEventListener("click", function () {
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("pswd").value;

  const validEmail = "appclick@gmail.com";
  const validPassword = "1234AppClick";

  if (emailInput === validEmail && passwordInput === validPassword) {
    alert("Login successful!");
  } else {
    alert("Invalid email or password.");
  }
});
