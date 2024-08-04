import "./style.css";
import { getData } from "./getData.js";

const submitBtn = document.getElementById("submitBtn");
const locationInput = document.getElementById("locationInput");
const temp = document.getElementById("temp");
const locationName = document.getElementById("locationName");
const timezone = document.getElementById("timezone");

const windInfo = document.getElementById("windInfo");
const humidityInfo = document.getElementById("humidityInfo");
const feelsLikeInfo = document.getElementById("feelsLikeInfo");
const uvIndexInfo = document.getElementById("uvIndexInfo");
const sunsetInfo = document.getElementById("sunsetInfo");
const rainInfo = document.getElementById("rainInfo");

submitBtn.addEventListener("click", (event) => {
  const userInput = locationInput.value;
  parseData(userInput);
  event.preventDefault();
});

async function parseData(city = "londres") {
  temp.innerText = "⌛"
  const data = await getData(city);

  console.log(data);
  temp.innerText = `${Math.round(data.currentConditions.temp)} °F`;
  let cityName = data.resolvedAddress.split(",", 1);
  locationName.innerText = cityName;

  let date = new Date();
  let options = { timeZone: `${data.timezone}` };
  let currentDate = date.toLocaleString("en-US", options);
  let localHour = removeSeconds(currentDate);
  timezone.innerText = `${localHour} PM`;

  let hour = removeSeconds(data.currentConditions.sunset);

  windInfo.innerText = `${data.currentConditions.windspeed} km/h`;
  humidityInfo.innerText = `${data.currentConditions.humidity} %`;
  feelsLikeInfo.innerText = `${data.currentConditions.feelslike} °F`;
  uvIndexInfo.innerText = `${data.currentConditions.uvindex}`;
  sunsetInfo.innerText = `${hour} PM`;
  rainInfo.innerText = `${data.currentConditions.precipprob} %`;
}

function removeSeconds(timeString) {
  const timeParts = timeString.split(":");
  return `${timeParts[0]}:${timeParts[1]}`;
}

parseData();
