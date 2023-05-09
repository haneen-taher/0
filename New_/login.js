const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("user").value;
  const password = document.getElementById("password1").value;
  const user = JSON.parse(localStorage.getItem(username));
  if (user && user.password === password) {
    alert(`Welcome back, ${username}!`);
    loginForm.reset();
  } else {
    alert("Invalid username or password!");
  }
});
