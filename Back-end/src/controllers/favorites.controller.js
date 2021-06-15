
const db = require("../models");
const Favorit = db.favorit;


// Create and Save a new User
exports.create = (req, res) => {
     // Validate request
     console.log(req.params.id)
     console.log(req.body.products)
     
  if (!req.params.id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Category
  const favorit = new Favorit({
    id_user: req.params.id,
    products: req.body.products
  });

  // Save Category in the database
  favorit
    .save(favorit)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category."
      });
    });
  
};

// Retrieve all Category from the database.
exports.findbyUser = (req, res) => {
    console.log("Hola")
    Favorit.find({id_user: req.params.id}).populate('products')
    .then(data => {
        if(!data){
            res.send(null)
        }
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Category."
      });
    });
};

// Find a single Category with an id
exports.addProduct = (req, res) => {
    const id_user = req.params.id;
    console.log("id",id_user)
    console.log("Hola", req.body)
    Favorit.findOneAndUpdate({id_user: id_user},{$push :{products:req.body.product}})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Category with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Category with id=" + id });
      });
};

// Update a Category by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Category with id=${id}. Maybe Category was not found!`
            });
          } else res.send({ message: "Category was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Category with id=" + id
          });
        });
};

// Delete a Category with the specified id in the request
exports.deleteProduct = (req, res) => {
    const id_user = req.params.id;
    console.log(req.body)
    Favorit.findOneAndUpdate({id_user: id_user},{$pull :{products:req.body.product}})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving with id=" + id });
      });
};
