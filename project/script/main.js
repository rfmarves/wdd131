// DOM elements
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const currentYearElement = document.querySelector("#currentYear");

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

// gets the date and year
const today = new Date();
let currentYear = today.getFullYear();

// writes current year into the corresponding SPAN element
currentYearElement.innerHTML = currentYear;