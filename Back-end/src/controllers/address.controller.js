
const db = require("../models");
const Address = db.address;

// Create and Save a new User
exports.create = (req, res) => {
    console.log(req.body)
     // Validate request
  if (!req.body.id_user || !req.body.street || !req.body.phone || !req.body.number || !req.body.cp || !req.body.neighborhood || !req.body.city || !req.body.country) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const address = new Address({
    id_user: req.body.id_user,
    street: req.body.street,
    phone: req.body.phone,
    number: req.body.number,
    cp: req.body.cp,
    neighborhood: req.body.neighborhood,
    city: req.body.city,
    country: req.body.country

  });

  // Save Product in the database
  address
    .save(address)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    });
  
};

exports.findAllDirections= (req, res) => {
    Address.find({id_user: req.params.id})
    .then(data => {
        if(!data){
            res.send("No existen Productos")
        }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    Address.find()
    .then(data => {
        if(!data){
            res.send("No existen Productos")
        }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Address.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Product with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Product with id=" + id });
      });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Address.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Product with id=${id}. Maybe Product was not found!`
            });
          } else res.send({ message: "Product was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Product with id=" + id
          });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Address.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
          });
        } else {
          res.send({
            message: "Product was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Product with id=" + id
        });
      });
};
