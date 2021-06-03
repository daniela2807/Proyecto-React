module.exports = app => {
    const product = require("../controllers/product.controller");
  
    var router = require("express").Router();
  
    // Create a new Product
    router.post("/", product.create);
  
    // Retrieve all users
    router.get("/",product.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", product.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", product.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", product.delete);

    app.use('/products', router);
  
  };