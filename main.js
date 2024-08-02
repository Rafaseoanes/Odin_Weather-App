import "./style.css";
import { getData } from "./getData.js";

// document.querySelector('#app').innerHTML = `

// `
//getData("bogta")

const submitBtn = document.getElementById("submitBtn");
const locationInput = document.getElementById("locationInput");

submitBtn.addEventListener("click", (event) => {
  const userInput = locationInput.value;

  async function parseData() {
    const data = await getData(userInput);
    console.log(data);
  }
  parseData()
  event.preventDefault();
});


