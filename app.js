const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
const displayTemp = document.querySelector('#temp');
const displayLocation = document.querySelector('#city');
const displayHumidity = document.querySelector('#humidity');
const logo = document.querySelector('#logo');
const pic = document.querySelector('.pic');

let modifier = 0;
let weather = 'https://api.weather.gov/stations/KSFO/observations';
let city = "Starfleet";
let icon = 'images/Iconsun.svg';
let details = "San Francisco, Earth";
getWeather(weather);

ul.addEventListener('click', (e) => {
    if(e.target.textContent === 'Vulcan'){
        modifier = 15;
        weather = 'https://api.weather.gov/stations/KGEU/observations';
        icon = 'images/Iconhot.svg';
        details = "ShiKahr, Vulcan"
        li.forEach(li => li.classList.remove('selected'));
        e.target.classList.add('selected');

    }
    else if(e.target.textContent === 'Starfleet'){
        modifier = 0;
        weather = 'https://api.weather.gov/stations/KSFO/observations';
        icon = 'images/Iconsun.svg';
        details = "San Francisco, Earth"
        li.forEach(li => li.classList.remove('selected'));
        e.target.classList.add('selected');
    }
    else if(e.target.textContent === 'Federation'){
        modifier = 0;
        weather = 'http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=26e742ba939b15495d3b62b6883ce9c7';
        icon = 'images/Iconsun.svg';
        details = "Paris, Earth"
        li.forEach(li => li.classList.remove('selected'));
        e.target.classList.add('selected');
    }
    else if(e.target.textContent === 'Ferenginar'){
        modifier = 0;
        weather = 'https://api.weather.gov/stations/kapf/observations';
        icon = 'images/Iconrain.svg';
        details = "Ferenginar";
        li.forEach(li => li.classList.remove('selected'));
        e.target.classList.add('selected');
    }
    city = e.target.textContent;
    getWeather(weather);
});

function getWeather(weather){
    fetch(weather)
    .then(data => data.json())
    .then(data => { 
        logo.setAttribute('src', `images/${city}.jpg`);
        logo.setAttribute('alt', `${city} symbol`);
        pic.setAttribute('src', `${icon}`)
        displayLocation.textContent = `Location: ${details}`;
        city === 'Federation' ? displayTemp.textContent = `Current Temperature: ${Math.round(data.main.temp - 273.15)}\xb0C`   // Converts from Kelvin (OpenWeatherMap API)
            : displayTemp.textContent = `Current Temperature: ${Math.round(data.features[0].properties.temperature.value + modifier)}\xb0C`;
    });
}




    // https://wallpaperplay.com/board/starfleet-logo-wallpapers Starfleet
    // http://i.imgur.com/5HQs8Ti.jpg Federation
    // https://cdn.wallpapersafari.com/73/49/YWl98f.jpg https://www.deviantart.com/wheatunrye   IDIC