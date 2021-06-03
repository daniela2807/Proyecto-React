const db = require("../models");
const Product = db.product;

// Create and Save a new User
exports.create = (req, res) => {
     // Validate request
  if (!req.body.name || !req.body.brand || !req.body.cost || !req.body.id_cat) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const product = new Product({
    name: req.body.name,
    brand: req.body.brand,
    cost: req.body.cost,
    id_cat: req.body.id_cat,
    description: req.body.description
  });

  // Save Product in the database
  product
    .save(product)
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

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    Product.find()
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

    Product.findById(id)
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
    
      Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
    Product.findByIdAndRemove(id)
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
