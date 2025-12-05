function updateTime() {
  
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement){
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesDateElement = document.querySelector(".los-angeles-date");

  losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");
  }

  
  let londonElement = document.querySelector("#london");
  if (londonElement){
  let londonTimeElement = londonElement.querySelector(".time");
  let londonDateElement = document.querySelector(".london-date");

  londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");
  }
}
function updateCity(event){
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#displayCities");
  citiesElement.innerHTML = `
  <div class="city-time">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
  
}

setInterval(updateTime, 1000);

let citySelected = document.querySelector("#cities");
citySelected.addEventListener("change", updateCity);