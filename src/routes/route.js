const express = require('express');
const router = express.Router();


const cowinController = require("../controllers/cowinController");
const memeController = require("../controllers/memeController");

const weatherController = require("../controllers/weatherController");




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
});




router.get("/getStates", cowinController.getStates);

router.get("/getDistricts/:stateId", cowinController.getDistricts);

router.get("/getDistrictSession", cowinController.getDistrictSession);

router.post("/meme", memeController.memeHandler);

router.get("/getWeather", weatherController.getWeather)

module.exports = router;