// se define dos variables donde se guardan los elemento llamado por id
let searchBtn = document.getElementById("search-btn"),
  countryInp = document.getElementById("country-inp"),
  result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value,
    finalURL = `https://restcountries.com/v3.1/name/${countryName}`;
  console.log(finalURL);

  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      // let mostrar = console.log(`pais: ${data[0].nativeName}`)
      // console.log(data[0]);
      // console.log(data[0].capital[0]);
      // console.log(data[0].flags.svg);
      // console.log(data[0].name.common);
      // console.log(data[0].continets[0]);
      // console.log(Object.keys(data[0].currencies)[0]);
      // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      // console.log(
      //   Object.values(data[0].languages).toString().split(",").join(",")
      // );
      result.innerHTML = `
      <img src="${data[0].flags.svg}" class="flag-img">
      <h2>${data[0].name.common}</h2>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>Capital:</h4>
          <span>${data[0].capital[0]}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>Continent:</h4>
          <span>${data[0].continents[0]}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>Population:</h4>
          <span>${data[0].population}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>Currency:</h4>
          <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>Continent:</h4>
          <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
        </div>
      </div>`
    })
    .catch((error)=>{
      if (countryName.length == 0) {
        result.innerHTML=`<h3>The input cannot be empty</h3>`;
      } else {
        result.innerHTML=`<h3>Please a enter a valid country name</h3>`;
      }
    });
});

let key ='b81b163454da42ceb872feb2f9cfce19', 
    URL= `https://ipgeolocation.abstractapi.com/v1/?api_key=${key}`;

    fetch(URL)
    .then(res => res.json())
    .then((data) => {
      console.log(data.ip_address);
      console.log(data.country);
    })