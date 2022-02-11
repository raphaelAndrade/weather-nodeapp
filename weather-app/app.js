const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=0d006444ab32dca51d2c0d41df7d720a&query=37.8267,-122.4233'

request({
    url: url
}, (error, response)=> {
    const data = JSON.parse(response.body)
    console.log(data.current)
})