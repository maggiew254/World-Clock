function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesDateElement = document.querySelector(".los-angeles-date");

  losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  let londonElement = document.querySelector("#london");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonDateElement = document.querySelector(".london-date");

  londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");
}

setInterval(updateTime, 1000);
