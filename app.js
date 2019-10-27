const ul = document.querySelector('ul');
const displayTemp = document.querySelector('#temp')
const displayLocation = document.querySelector('#city');
const logo = document.querySelector('#logo');

let city = "Starfleet";
const vulcan = 'https://api.weather.gov/stations/KGEU/observations'; // Phoenix


fetch(vulcan)
    .then(data => data.json())
    .then(data => {
        logo.setAttribute('src', 'images/vulcan.jpg');
        logo.setAttribute('alt', 'IDIC symbol');
        displayLocation.textContent = `Location: ShiKahr, Vulcan`;
        displayTemp.textContent = `Current Temperature: ${data.features[0].properties.temperature.value + 15}`;
    });

ul.addEventListener('click', (e) => {
    console.log(e.target.textContent)
    fetch(e.target.textContent)
    .then(data => data.json())
    .then(data => {
        logo.setAttribute('src', 'images/vulcan.jpg');
        logo.setAttribute('alt', 'IDIC symbol');
        displayLocation.textContent = `Location: ShiKahr, Vulcan`;
        displayTemp.textContent = `Current Temperature: ${data.features[0].properties.temperature.value + 15}`;
    });
});




    // https://wallpaperplay.com/board/starfleet-logo-wallpapers Starfleet
    // https://cdn.wallpapersafari.com/73/49/YWl98f.jpg https://www.deviantart.com/wheatunrye   IDIC