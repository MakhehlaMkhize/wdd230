const numberOfVisitsDisplay = document.querySelector(".visits");

let numberOfVisits = Number(window.localStorage.getItem("visits-ls"));

if (numberOfVisits !== 0) {
	numberOfVisitsDisplay.textContent = numberOfVisits;
} else {
	numberOfVisitsDisplay.textContent = `This is your first visit!`;
}
numberOfVisits++;
localStorage.setItem("visits-ls", numberOfVisits);