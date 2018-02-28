const express = require('express');
const hbs = require('hbs');
const path = require('path');

const geocode = require("./geocode/geocode.js")
const weather = require("./weather/weather.js")


const app = express();
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(path.join(__dirname, "views", "partials"));
hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
})

app.get(`/`,(req,res)=>{
  res.redirect(`/vacation`);
})

app.get('/vacation', (req, res) => {
  const destination = req.query.destination;

  if (destination === 'Hawaii') {

    geocode.get_weatherurl("Hawaii")
      .then(response => {
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        return weather.get_weather(lat, lng);
      })
      .then(response => {
        const hawaii_temp = response.data.currently.temperature;
        res.render('index.hbs', {
          pageTitle: "Vacation",
          name: "Jeremy",
          hawaii_temp,
          img1: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/12994335_10154121447156624_4996192837104744752_n.jpg?oh=d6a2353c72e9bbae449f08d3b8ef5f13&oe=5B032058",
          img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqjLQQPyJxRn4ZhcZ7lD-33-3mnV3kbjpKlRG69GQVuuZezh-pg",
          img3: "https://hawaii.imgix.net/2014/05/beach-84533_1280.jpg?w=800&h=450&fit=crop&=entropy&auto=format"
        })
      })

  } else if (destination === 'Venice') {

    geocode.get_weatherurl("Venice")
      .then(response => {
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        return weather.get_weather(lat, lng);
      })
      .then(response => {
        const venice_temp = response.data.currently.temperature;
        res.render('index.hbs', {
          pageTitle: "Vacation",
          name: "Jeremy",
          venice_temp,
          img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Rio_di_Ca_Foscari%2C_to_the_Bridge_Santa_Margherita_%28Venice%29.jpg/220px-Rio_di_Ca_Foscari%2C_to_the_Bridge_Santa_Margherita_%28Venice%29.jpg",
          img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJjJREI5YVKC4I2uv7N-pkPBnnSWrasjcsGBpEx-GPW5SQPTX",
          img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKgajM9138SlvzdfLv--TlpYjzMn2b2H9Q2tghV44ofpAbppXig"
        })
      })

  } else if (destination === 'Tokyo') {

    geocode.get_weatherurl("Tokyo")
      .then(response => {
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        return weather.get_weather(lat, lng);
      })
      .then(response => {
        const tokyo_temp = response.data.currently.temperature;
        res.render('index.hbs', {
          pageTitle: "Vacation",
          name: "Jeremy",
          tokyo_temp,
          img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Tokyo_Tower_at_night_8.JPG/220px-Tokyo_Tower_at_night_8.JPG",
          img2: "https://www.japan-guide.com/thumb/XYZeXYZe3064_375.jpg",
          img3: "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/3b/0c/p03b0ckb.jpg"
        })
      })

  }
})



app.listen(3000, () => {
  console.log("listening on port 3000");
})
