import "./style.css";
import { getData } from "./getData.js";


// document.querySelector('#app').innerHTML = `

// `
//getData("bogta")

const submitBtn = document.getElementById("submitBtn");
const locationInput = document.getElementById("locationInput");
const temp = document.getElementById("temp");
const locationName = document.getElementById("locationName");

submitBtn.addEventListener("click", (event) => {
  const userInput = locationInput.value;
  parseData(userInput);
  event.preventDefault();
});

async function parseData(city = "londres") {
  const data = await getData(city);
  
  temp.innerText = data.currentConditions.temp;
  let cityName = data.resolvedAddress.split(",", 1);
  locationName.innerText = cityName;
}

parseData();
