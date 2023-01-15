const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
};
let lastModified = document.lastModified;
document.getElementById("date").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =lastModified;

