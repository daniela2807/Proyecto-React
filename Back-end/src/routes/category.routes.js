module.exports = app => {
    const category = require("../controllers/category.controller");
  
    var router = require("express").Router();
  
    // Create a new Product
    router.post("/", category.create);
  
    // Retrieve all users
    router.get("/",category.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", category.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", category.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", category.delete);

    app.use('/category', router);
  
  };