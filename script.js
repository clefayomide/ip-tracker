let ipAddress = document.querySelector(".ip-address");
let continentName = document.querySelector(".continent-name");
let countryName = document.querySelector(".country-name");
let cityName = document.querySelector(".city-name");
let lonValue = document.querySelector(".lon-value");
let latValue = document.querySelector(".lat-value");
let ispName = document.querySelector(".isp-name");
let ipInfoContainer = document.querySelector(".ip-info-container");
let btn = document.querySelector(".btn");

async function getDetails() {
  await fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      let ip = data.ip;
      window.ip = ip;
      ipAddress.innerHTML = `IP ADDRESS: ${ip}`;
    })
    .catch((error) => console.log(error));
  coords();
}

let coords = () => {
  fetch(
    "https://geo.ipify.org/api/v1?apiKey=at_ozRQ7AEOCUTRPiuRKyocronAVq5OT&ipAddress=" +
      `${ip}`
  )
    .then((response) => response.json())
    .then((data) => {
      ipInfoContainer.style.visibility = "visible";
      continentName.innerHTML = data.location.country;
      countryName.innerHTML = data.location.region;
      cityName.innerHTML = data.location.city;
      latValue.innerHTML = data.location.lat;
      lonValue.innerHTML = data.location.lng;
      ispName.innerHTML = data.isp;
    })
    .catch((error) => console.log(error));
};

btn.addEventListener("click", getDetails);