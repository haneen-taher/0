const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("user").value;
  const email = document.getElementById("email").value;
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;
  const user = { username, email, password1, password2 };
  localStorage.setItem(username, JSON.stringify(user));
  alert("Registration successful!");
  registerForm.reset();
});
