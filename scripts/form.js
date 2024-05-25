const productField =  document.querySelector("#productName");
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

products.forEach(product => {
    // productField.innerHTML
    let newOption = document.createElement("OPTION");
    newOption.setAttribute("value", product.id);
    newOption.textContent = product.name;
    productField.appendChild(newOption);
    // <option value="" disabled selected>Select a Product ...</option>

});
console.log("ran this");
