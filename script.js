const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const API_KEY = process.env.API_KEY;

function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour;
    const ampm = hour >=12 ? 'PM' : 'AM';
    const date = now.getDate();
    const opt_day = { weekday: "long" };
    const dayNames = new Intl.DateTimeFormat("en-US", opt_day).format(now);

    const opt_month = {month: "long"};
    const monthNames = new Intl.DateTimeFormat("en-US", opt_month).format(now);
    document.getElementById("dt").innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`;

    dateEl.innerHTML = dayNames + ", " + date + " " + monthNames;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  