// DOM elements
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const currentYearElement = document.querySelector("#currentYear");
const lastModifiedElement = document.querySelector("#lastModified");
const mainHeader = document.querySelector("#mainHeader")
const templesContainer = document.querySelector("#temple-container");
const homeButton = document.querySelector("#home-button");
const oldButton = document.querySelector("#old-button");
const newButton = document.querySelector("#new-button");
const largeButton = document.querySelector("#large-button"); 
const smallButton = document.querySelector("#small-button");

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

// gets the date and year
const today = new Date();
let currentYear = today.getFullYear();

// writes current year into the corresponding SPAN element
currentYearElement.innerHTML = currentYear;

// gets and writes when this document was last modified
lastModifiedElement.innerHTML = document.lastModified;

// Array of temple objects
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},	
	// Added temples start here
	{
		templeName: "Guatemala City",
		location: "Guatemala City, Guatemala",
		dedicated: "1984, December, 14",
		area: 11610,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guatemala-city-guatemala/400x250/guatemala-city-temple-lds-829605-wallpaper.jpg"
	  },	
	  {
		templeName: "Guatemala Quetzaltenango",
		location: "Quetzaltenango, Guatemala",
		dedicated: "2011, December, 11",
		area: 21085,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quetzaltenango-guatemala/400x250/quetzaltenango-guatemala-temple-lds-893068-wallpaper.jpg"
	  },	
	  {
		templeName: "Dallas Texas",
		location: "Dallas, Texas, United States",
		dedicated: "1982, October, 19",
		area: 44207,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/2018/400x250/Dallas-Texas-Temple14.jpg"
	  },	
	  {
		templeName: "Los Angeles California",
		location: "Los Angeles, California, United States",
		dedicated: "1956, March, 11",
		area: 190614,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/400x250/los-angeles-california-temple-1079458-wallpaper.jpg"
	  },	  
	  {
		templeName: "Newport Beach California",
		location: "Newport Beach, California, United States",
		dedicated: "2005, August, 28",
		area: 17800,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/newport-beach-california/400x250/newport-beach-california-temple-1169298-wallpaper.jpg"
	  },
	  // Add more temple objects here...
  ];

const templeCard = (name, location, date, area, image) =>
// template function to create 1 temple card
`<h3>${name}</h3>
	<div class="temple-card-data">
	  <p><span class="card-label">Location: </span><span class="card-data">${location}</span></p>
	  <p><span class="card-label">Dedicated: </span><span class="card-data">${date}</span></p>
	  <p><span class="card-label">size: </span><span class="card-data">${area} sq ft</span></p>
	</div>
	<img src="${image}" alt="Image of ${name} temple" width="400" height="250" loading="lazy">`;

const renderTemples = (templeList) => {
// creates temple cards based on temple list object
	templesContainer.innerHTML=""; 	// clears temple container to start populating
	templeList.forEach(temple => {  // cycles through items and appends them
		let newCard = document.createElement("div");
		newCard.setAttribute("class", "temple-card");
		newCard.innerHTML = templeCard(temple.templeName, temple.location, temple.dedicated, temple.area, temple.imageUrl);
		templesContainer.appendChild(newCard);
	});
}

// filter event listeners
oldButton.addEventListener('click', () => {
	mainHeader.textContent = "Old Temples";
	renderTemples(temples.filter(temple => Number(temple.dedicated.slice(0,4))<1900));
});

newButton.addEventListener('click', () => {
	mainHeader.textContent = "New Temples";
	renderTemples(temples.filter(temple => Number(temple.dedicated.slice(0,4))>2000));
});

largeButton.addEventListener('click', () => {
	mainHeader.textContent = "Large Temples";
	renderTemples(temples.filter(temple => temple.area > 90000));
});

smallButton.addEventListener('click', () => {
	mainHeader.textContent = "Small Temples";
	renderTemples(temples.filter(temple => temple.area < 10000));
});

homeButton.addEventListener('click', () => {
	mainHeader.textContent = "All Temples";
	renderTemples(temples);
});


// initial load of all temples
renderTemples(temples);

