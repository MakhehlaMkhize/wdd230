const userName = document.querySelector("#userName");
const userNameConfirm = document.querySelector("#userNameConfirm");
const message = document.querySelector("#formMessage");
const emailAddress = document.querySelector(".email");

userNameConfirm.addEventListener("focusout", checkSame);

  
    
// This should be refactored.
function checkSame() {
	if (userName.value !== userNameConfirm.value) {
		message.textContent = "User Names DO NOT MATCH!";
		message.style.display = "block";
		userNameConfirm.style.backgroundColor = "#aa3333";
		userNameConfirm.style.color = "#fff";
		userName.focus();
		userNameConfirm.value = "";
	} else {
		message.style.display = "none";
		userNameConfirm.style.backgroundColor = "#fff";
		userNameConfirm.style.color = "#000";
	}
}





