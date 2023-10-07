let api = "1de1bdba2e830f819fadf1a0ee463736"; //api key

function getweather(city, api) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      display(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getweather("nagpur", api);

//to display data

function display(weatherdata) {
  document.getElementById("head").innerHTML = "Weather in " + weatherdata.name;
  document.getElementById("temp").innerHTML = weatherdata.main.temp + "  C";
  document.getElementById("feels").innerHTML =
    "feels like : " + weatherdata.main.feels_like;

  document.getElementById("humid").innerHTML =
    "Humidity : " + weatherdata.main.humidity + " %";
  document.getElementById("wind").innerHTML =
    "Wind Speed : " + weatherdata.wind.speed + " km/h";
  document.getElementById("mon").innerHTML = new Date().toDateString();
  setInterval(() => {
    let date = new Date();
    let n = date.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    document.getElementById("tim").innerHTML = n;
  }, 1000);
}

// to read data
function readData() {
  let data = document.getElementById("city").value;
  getweather(data, api);
}
