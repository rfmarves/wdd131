// DOM elements for output
const tempElement = document.querySelector("#temp_value");
const conditionsElement = document.querySelector("#conditions_value");
const windElement = document.querySelector("#wind_value");
const windChillElement = document.querySelector("#wind_chill_value");

let temp = 30;
let windSpeed = 15;
let conditions = "Sunny";

// function windChill(temperature, windSpeed) {
//     if(temperature <= 10 && windSpeed > 4.8) {
//         let windChillValue = 13.12 + 0.6215*temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
//         return `${windChillValue.toFixed(2)}°C`
//     } else {
//         return "N/A"
//     }
// } 

const windChill = (T, V) => {
    // T is temperature in Celcius and V is wind speed in km/h
    if(T <= 10 && V > 4.8) {
        let windChillValue = 13.12 + 0.6215*T - 11.37 * V ** 0.16 + 0.3965 * T * V ** 0.16;
        return `${windChillValue.toFixed(2)}°C`
    } else {
        return "N/A"
    }
}

// tests
// console.log(windChill(temp, windSpeed));
// console.log(windChill(-31, 8));

// Populate weather box:
tempElement.textContent = `${temp}°C`;
conditionsElement.textContent = `${conditions}`;
windElement.textContent = `${windSpeed} km/h`;
windChillElement.textContent = windChill(temp, windSpeed);
