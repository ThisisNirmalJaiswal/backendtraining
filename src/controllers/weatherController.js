const axios = require('axios')

let getWeather = async function(req, res){
    try{
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjectArray = []

        for( i=0; i<cities.length; i++)
        {
            let obj = {city: cities[i]}
            let respond = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=af0e7f1085aeef155b00a9ebd0943cd8`)
            console.log(respond.data.main.temp)

            obj.temp = respond.data.main.temp
            cityObjectArray.push(obj)
        }
        let sorted = cityObjectArray.sort(function(a,b){return a.temp - b.temp} )
        console.log(sorted)
        res.status(200).send({status: true, data: sorted})
    }catch(err){
        console.log(err)
        res.status(500).send({msg:"server error", status: false})
    }

}


module.exports.getWeather = getWeather;
