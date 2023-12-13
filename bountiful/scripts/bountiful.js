let today1 = new Date();
document.querySelector("#currentyear").textContent=today1.getFullYear()
document.querySelector("#lastmodified").textContent=document.lastModified
//Hamburger Menu code. 
const hidebutton = document.querySelector(".menu-hide");
const showbutton = document.querySelector(".menu-show");
const navmenu = document.querySelector("#nav-menu"); 

hidebutton.addEventListener('click',() => {
    hidebutton.classList.toggle('showing');
    showbutton.classList.toggle('showing');
    navmenu.classList.toggle('showing');
});

showbutton.addEventListener('click',() => {
    hidebutton.classList.toggle('showing');
    showbutton.classList.toggle('showing');
    navmenu.classList.toggle('showing');        
});

//weather

const LAT = "33.1214111";
const LON = "-117.4526142";
const APIKEY = "631f60a5da38f8113b914a44c75080a6";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

// const apiURL = "./data/weather.json";

function displayWeather(weatherData) {
  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  // const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
  const desc = weatherData.weather[0].description;
  const windSpeed = weatherData.wind.speed.toFixed(0);
  const temperature = weatherData.main.temp.toFixed(0);

  //Set up the weather icon
  let weatherIcon = document.getElementById("weather-icon");
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  //Set up the weather description
  let weatherDesc = document.getElementById("weather-desc");
  weatherDesc.innerHTML = `${desc}`;
  
  let weatherTemp = document.getElementById("weather-temp");
  weatherTemp.innerHTML = `${temperature}&deg;F | ${windSpeed} mph wind`;
}

async function getTheWeather() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getTheWeather();

//Three day forecast
function GetInfo() {

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`)
.then(response => response.json())
.then(data => {

for(i = 0; i<3; i++){
    document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png";
}
for(i=0;i<3;i++) {
    document.getElementById("day" + (i+1) + "Desc").innerHTML = String(data.list[i].weather.description).toFixed(1);
}
console.log(data)
})
.catch(err => alert("Oops! Something went wrong"))
}
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7; 
    }
    else{
        return day + d.getDay();
    }
}
for (i = 0;i<3; i++){
    document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
}

