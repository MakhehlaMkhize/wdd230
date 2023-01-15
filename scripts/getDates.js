const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
};

document.getElementById("date").textContent = new Date().getFullYear()
document.getElementById("lastModified").textContent = new Date().getDate(options)

