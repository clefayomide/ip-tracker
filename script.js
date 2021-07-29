let ipAddress = document.querySelector('.ip-address')
let continentName = document.querySelector('.continent-name')
let countryName = document.querySelector('.country-name')
let cityName = document.querySelector('.city-name')
let lonValue = document.querySelector('.lon-value')
let latValue = document.querySelector('.lat-value')
let ispName = document.querySelector('.isp-name')
let ipInfoContainer = document.querySelector('.ip-info-container')
let btn = document.querySelector('.btn')

let getDetails = () => {
    fetch("https://api.ipify.org?format=json").then((response) => response.json()).then((data) => {
    let ip = data.ip
    ipAddress.innerHTML = `IP ADDRESS: ${ip}`

    return fetch("http://ip-api.com/json/" + `${ip}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,mobile,query`).then((response) => response.json()).then((data) => {
        ipInfoContainer.style.visibility = "visible"
        continentName.innerHTML = data.continent
        countryName.innerHTML = data.country
        cityName.innerHTML = data.city
        latValue.innerHTML = data.lat
        lonValue.innerHTML = data.lon
        ispName.innerHTML = data.isp
    }).catch((error) => console.log(error))
}).catch((error) => console.log(error))
}

btn.addEventListener('click', getDetails)