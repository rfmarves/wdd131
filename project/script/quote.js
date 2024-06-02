// DOM elements
const quoteResult = document.querySelector("#quote-result");
const quoteOutput = document.querySelector("#quote-output");
const getQuoteButton = document.querySelector("#get-quote");
const printWeight = document.querySelector("#print-weight");
const printTime = document.querySelector("#print-time");
const materialSelection = document.querySelector("#material-selection");

// quoting parameters
const costParameters = [
    {
        materialName: "PLA",
        perGramCost: 2,
        perHourCost: 5,
        minCost: 50,
        baseCost: 30,
        currency: "Q"
    },
    {
        materialName: "PETG",
        perGramCost: 2.5,
        perHourCost: 5.3,
        minCost: 50,
        baseCost: 30,
        currency: "Q"
    },
    {
        materialName: "Flex",
        perGramCost: 4,
        perHourCost: 6,
        minCost: 60,
        baseCost: 40,
        currency: "Q"
    }
]

calculateQuote = (materialObject, grams, hours) => {
    return Math.max(hours * materialObject.perHourCost + grams * materialObject.perGramCost + materialObject.baseCost, materialObject.minCost);
}

displayQuote = () => {
    let selectedMaterial =  document.querySelector('input[name="print-material"]:checked').value;
    let materialObject = costParameters.find(obj => obj.materialName === selectedMaterial);
    console.log(`Material: ${materialObject.materialName}`);
    let printHours = Number(printTime.value);
    let printGrams = Number(printWeight.value);
    let quote = calculateQuote(materialObject, printGrams, printHours);
    quoteOutput.textContent = `Q. ${quote.toLocaleString(undefined, {maximumFractionDigits: 2})}`;
    quoteResult.classList.toggle('hidden');
    getQuoteButton.classList.toggle('noHover');
}

hideQuote = () => {
    quoteResult.classList.toggle('hidden');
    getQuoteButton.classList.toggle('noHover');
}

costParameters.forEach(material => {
    let newRadioItem = document.createElement("label");
    newRadioItem.innerHTML = `<input type="radio" name="print-material" required value="${material.materialName}"> ${material.materialName}`;
    materialSelection.appendChild(newRadioItem);
}); 

getQuoteButton.addEventListener('click', displayQuote);

quoteResult.addEventListener('click', hideQuote);