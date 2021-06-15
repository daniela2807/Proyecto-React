const db = require("../models");
const Slider = db.slider;

exports.create = (req, res) => {
    // Validate request
 if (!req.body.img ) {
   res.status(400).send({ message: "Content can not be empty!" });
   return;
 }
 // Create a Category
 const slider = new Slider({
   img: req.body.img
 });
 slider
 .save(slider)
 .then((data) => {
   res.send(data);
 })
 .catch((err) => {
   res.status(500).send({
     message:
       err.message || "Some error occurred while creating the Product.",
   });
 });
 
 
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  Slider.find()
    .then((data) => {
      if (!data) {
        res.send("No existen los sliders");
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Sliders.",
      });
    });
};
