export async function getData(location) {
  try {
    let fetchData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=CQLL98G9FAN8P492F7ATG8VCV`
    );
    let data = await fetchData.json();
    //console.log(data)
    return data;
  } catch (err) {
    alert("Please enter a valid location");
  }
}
