 const mainnav = document.querySelector(".navigation");
 const hambutton = document.querySelector("#menu");

 hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

// DOM elements for output
const currentYearElement = document.querySelector("#currentYear");
const lastModifiedElement = document.querySelector("#lastModified");

// gets the date and year
const today = new Date();
let currentYear = today.getFullYear();

// writes current year into the corresponding SPAN element
currentYearElement.innerHTML = currentYear;

// gets and writes when this document was last modified
lastModifiedElement.innerHTML = document.lastModified;
