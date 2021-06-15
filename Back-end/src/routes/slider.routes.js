module.exports = app => {
    const slider = require("../controllers/slider.controller");
    var router = require("express").Router();
  
    
    // Retrieve all sliders
    router.get("/", slider.findAll);
  
    app.use('/sliders', router);
  
  };