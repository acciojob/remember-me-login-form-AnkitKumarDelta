let f = document.querySelector('form');
let inp = document.querySelector('#username');
let pass = document.querySelector('#password');
let check = document.querySelector('#checkbox');
let submitBtn = document.querySelector('#submit');
let loginBtn = document.querySelector('#existing');

loginBtn.disabled = !localStorage.getItem("userdata");

f.addEventListener("submit", (e) => {
	e.preventDefault();

	if (check.checked) {
		let data = JSON.stringify({
			username: inp.value,
			password: pass.value
		});
		localStorage.setItem("userdata", data);
	}
else if(!check.checked){
	localStorage.removeItem("userdata");
}
	alert(`Logged in as ${inp.value}`);
});
loginBtn.addEventListener("click",(e)=>{
	let username = JSON.parse(localStorage.getItem("userdata")).username;
	alert(`Logged in as ${username}`);
})
