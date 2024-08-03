import "./style.css";
import { getData } from "./getData.js";

// document.querySelector('#app').innerHTML = `

// `
//getData("bogta")

const submitBtn = document.getElementById("submitBtn");
const locationInput = document.getElementById("locationInput");
const temp = document.getElementById("temp");
const locationName = document.getElementById("locationName");
const timezone = document.getElementById("timezone");

const windInfo = document.getElementById("windInfo");
const humidityInfo = document.getElementById("humidityInfo");

submitBtn.addEventListener("click", (event) => {
  const userInput = locationInput.value;
  parseData(userInput);
  event.preventDefault();
});

async function parseData(city = "londres") {
  const data = await getData(city);

  console.log(data);
  temp.innerText = `${data.currentConditions.temp} °F`;
  let cityName = data.resolvedAddress.split(",", 1);
  locationName.innerText = cityName;

  let date = new Date();
  let options = { timeZone: `${data.timezone}` };
  let currentDate = date.toLocaleString("en-US", options);
  timezone.innerText = currentDate;

  windInfo.innerText = `${data.currentConditions.windspeed} km/h`;
  humidityInfo.innerText = `${data.currentConditions.humidity} %`;
}

parseData();
