const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=0d006444ab32dca51d2c0d41df7d720a&query=37.8267,-122.4233'

request({url: url, json: true}, (error, response)=> {
    const data = response.body.current
    console.log(`${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees and the feelslike is ${data.feelslike} degrees`)
})

//Geocoding
//Address -> Lat/Long -> Weather


const urlLatLong = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFwaGF2YW4iLCJhIjoiY2t6aTBsaDEwNDdvczJvbmt1cHI4MmdzZiJ9.tmnZPLyb9RVlUBkrKBvn2g`
request({url: urlLatLong, json: true}, (error, response) => {
    const data = response.body.features[0].center
    const lat = data[0]
    const long = data[1]
    console.log(`The lat is ${lat} and the long is ${long}`)
})

