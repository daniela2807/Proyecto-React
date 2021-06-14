module.exports = (app) => {
    const address = require("../controllers/address.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", address.create);
  
    // Retrieve all address
    router.get("/", address.findAll);

    router.get("/user/:id", address.findAllDirections);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", address.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", address.update);
  
  
    // Delete a Tutorial with id
    router.delete("/:id", address.delete);
  
    app.use("/address", router);
  
    //me parece que aqui iria la ruta user/me para que de aqui mandarlo a hacer toda esa chamba del localstorege
  };
  