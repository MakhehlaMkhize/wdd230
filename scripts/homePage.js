const menu = document.querySelector(".material-symbols-outlined");
const navItem = document.querySelectorAll("nav a");


menu.addEventListener("click", () => {
	navItem.forEach((item) => item.classList.toggle("open"));
	menu.classList.toggle("close");
});




