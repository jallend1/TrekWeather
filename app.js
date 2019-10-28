const ul = document.querySelector('ul');
const displayTemp = document.querySelector('#temp');
const displayLocation = document.querySelector('#city');
const displayHumidity = document.querySelector('#humidity');
const logo = document.querySelector('#logo');

let modifier = 0;
let weather = 'https://api.weather.gov/stations/KSFO/observations';
let city = "Starfleet";
getWeather(weather);

ul.addEventListener('click', (e) => {
    if(e.target.textContent === 'Vulcan'){
        modifier = 15;
        weather = 'https://api.weather.gov/stations/KGEU/observations';
    }
    else if(e.target.textContent === 'Starfleet'){
        modifier = 0;
        weather = 'https://api.weather.gov/stations/KSFO/observations';
    }
    else if(e.target.textContent === 'Federation'){
        modifier = 0;
        weather = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6e742ba939b15495d3b62b6883ce9c7';
    }
    city = e.target.textContent;
    city !== 'Federation' ? getWeather(weather) : getInternational(weather);
});

function getInternational(weather){
    fetch(weather)
        .then(data => data.json())
        .then(console.log(data));
}

function getWeather(weather){
    fetch(weather)
    .then(data => data.json())
    .then(data => { 
        console.log(data.features[0].properties.temperature.value);
        logo.setAttribute('src', `images/${city}.jpg`);
        logo.setAttribute('alt', `${city} symbol`);
        displayLocation.textContent = `Location: ${city}`;
        displayTemp.textContent = `Current Temperature: ${data.features[0].properties.temperature.value + modifier}`;
    });
}




    // https://wallpaperplay.com/board/starfleet-logo-wallpapers Starfleet
    // https://cdn.wallpapersafari.com/73/49/YWl98f.jpg https://www.deviantart.com/wheatunrye   IDIC