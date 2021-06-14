const db = require("../models");
const User = db.user;
const { sign } = require("jsonwebtoken");
// Create and Save a new User
exports.create = (req, res) => {
     // Validate request
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  // Save User in the database
  user
    .save(user)
    .then(data => {
      console.log(data)
      data.password = undefined
      const jsonwebtoken = sign({ result: data }, 'reactproy');
      res.send({
        message: "1",
        data: data,
        token: jsonwebtoken,
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
  
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(data => {
        if(!data){
            res.send("No existen User")
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

    User.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found User with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Users with id=" + id });
      });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message:"0",
          data: "Data to update can not be empty!"
        });
      }
    
      console.log(req.params.id);
      console.log(req.body);
      const id = req.params.id;
    
      User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({ message:"0",
              data: `Cannot update User with id=${id}. Maybe User was not found!`
            });
          } else res.send({ message: "1",
          data: data });
        })
        .catch(err => {
          res.status(500).send({ message:"0",
            data: "Error updating User with id=" + id
          });
        });
};

exports.updatename = (req, res) => {
  console.log(req);
  if (!req.body) {
      return res.status(400).send({ message:"0",
        data: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    User.findByIdAndUpdate(id, {name: req.body.name}, { useFindAndModify: true })
      .then(data => {
        if (!data) {
          res.status(404).send({ message:"0",
            data: `Cannot update User with id=${id}. Maybe User was not found!`
          });
        } else res.send({ message: "1",
        data: data });
      })
      .catch(err => {
        res.status(500).send({ message:"0",
          data: "Error updating User with id=" + id
        });
      });
};


// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        } else {
          res.send({
            message: "User was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
};


exports.login = (req, res) => {

  console.log(req.body);
  User.find({$and:[{email:req.body.email},{password: req.body.password}]}, function(err,doc){
    if(err) {
      res.send(err)
    }else{
      console.log(doc);
      if(doc==""){
        res.status(400).send({
          message: "0"
        });
      }else{
       // console.log(doc)
       doc.password = undefined;
       const jsonwebtoken = sign({ result: doc }, 'reactproy');
       res.send({
         message: "1",
         data: doc,
         token: jsonwebtoken,
       });
      }
      
    }});
};