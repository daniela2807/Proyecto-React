module.exports = app => {
    const slider = require("../controllers/slider.controller");
    var router = require("express").Router();
  
    router.post("/", slider.create);
    // Retrieve all sliders
    router.get("/", slider.findAll);
  
    app.use('/sliders', router);

  };