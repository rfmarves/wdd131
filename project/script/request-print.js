const typeSelector1 = document.querySelector('#type1');
const typeSelector2 = document.querySelector('#type2');
const advertisedSelect = document.querySelector('#advertised-print');
const labelURL = document.querySelector('#object-url-label');
const objectURL = document.querySelector('#object-url');
const requestButton = document.querySelector('#requestPrint');
const 


radioClicked = () => {
    let selectedType =  document.querySelector('input[name="print-type"]:checked').value;
    if(selectedType=="advertised") {
        advertisedSelect.classList.remove('hidden');
        advertisedSelect.setAttribute('required', '');
        labelURL.classList.add('hidden');
        objectURL.classList.add('hidden');
        objectURL.removeAttribute('required', '');
    } else {
        advertisedSelect.classList.add('hidden');
        advertisedSelect.removeAttribute('required', '');
        labelURL.classList.remove('hidden');
        objectURL.classList.remove('hidden');
        objectURL.setAttribute('required', '');
    }
}

sendEmail = () => {
    let quoteType = document.querySelector('input[name="print-type"]:checked').value;
    let message = '';
    let predefinedObject = '';
    if(quoteType == "advertised") {
        if(advertisedSelect.value == "christus") {
            predefinedObject = "Christus Figurine";
        } else if(advertisedSelect.value == "clock") {
            predefinedObject = "Mechanical Clock";
        } else if(advertisedSelect.value == "mechanism") {
            predefinedObject = "Clock Mechanism"
        }
        message = `I would like to buy a ${predefinedObject}.`;
    } else {
        message = `I would like to buy a custom print of the object in this website: ${objectURL.value}`;
    }
    window.location.href = `mailto:mar23032@byui.edu?subject=Print request&body=${message}`;
};

typeSelector1.addEventListener("click", () => {radioClicked()});
typeSelector2.addEventListener("click", () => {radioClicked()});
requestButton.addEventListener("click", () => {sendEmail()});