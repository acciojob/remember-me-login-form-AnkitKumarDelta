let f = document.querySelector('form');
let inp = document.querySelector('#username');
let pass = document.querySelector('#password');
let check = document.querySelector('#checkbox');
let submitBtn = document.querySelector('#submit');
let loginBtn = document.querySelector('#existing');

// Hide existing user button initially
loginBtn.style.display = "none";

// Show if credentials exist
if (localStorage.getItem("username") && localStorage.getItem("password")) {
  loginBtn.style.display = "inline";
}

f.addEventListener("submit", (e) => {
  e.preventDefault();

  if (check.checked) {
    localStorage.setItem("username", inp.value);
    localStorage.setItem("password", pass.value);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${inp.value}`);
});

loginBtn.addEventListener("click", () => {
  let username = localStorage.getItem("username");
  if (username) {
    alert(`Logged in as ${username}`);
  }
});
