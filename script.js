// adding api url and apikey
const apikey = "8a1f79a14fb2a78956f4a7a681ba2675"; 
const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apikey}`;

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city) {
        const response = await fetch(apiurl+ city +'&appid=${apikey}');
        const data = await response.json();
        console.log(data);

        // updating the value of wind, humidity according to city

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";

document.querySelector(".wind").innerHTML=data.wind.speed +"Km/hr";
        
    }


searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
        // console.log(searchBox);
        

      });
      


// checkWeather();
