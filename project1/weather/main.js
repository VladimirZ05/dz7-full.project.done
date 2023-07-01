const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const apiKey = 'e417df62e04d3b1b111abeab19cea714'
const citySearch = () => {
    const cityName =  document.querySelector('.cityName')
    cityName.oninput = (event) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                city.innerHTML = data?.name || 'City was not found...'
                temp.innerHTML = data?.main?.temp? Math.round(data?.main?.temp - 273) + '&deg;C' : '.....'
            })
    }
}
citySearch()