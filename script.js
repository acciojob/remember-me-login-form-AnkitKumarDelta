let f = document.querySelector('form');
let inp = document.querySelector('#username');
let pass = document.querySelector('#password');
let check = document.querySelector('#checkbox');
let submitBtn = document.querySelector('#submit');
let loginBtn = document.querySelector('#existing');

loginBtn.style.display = "none";

if (localStorage.getItem("userdata")) {
  loginBtn.style.display = "inline";
}

f.addEventListener("submit", (e) => {
  e.preventDefault();

  if (check.checked) {
    let data = JSON.stringify({
      username: inp.value,
      password: pass.value
    });
    localStorage.setItem("userdata", data);
  } else {
    localStorage.removeItem("userdata");
  }
  alert(`Logged in as ${inp.value}`);
});

loginBtn.addEventListener("click", () => {
  let stored = localStorage.getItem("userdata");
  if (stored) {
    let username = JSON.parse(stored).username;
    alert(`Logged in as ${username}`);
  }
});
