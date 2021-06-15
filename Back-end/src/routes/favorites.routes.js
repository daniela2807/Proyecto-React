module.exports = app => {
    const favorit = require("../controllers/favorites.controller");
  
    var router = require("express").Router();
  
    // Create a new Product
    router.post("/:id", favorit.create);
  
    router.post("/:id",favorit.addProduct);
  
    // Retrieve a favorites by user
    router.get("/:id", favorit.findbyUser);
  
    // Update a Tutorial with id
    // router.put("/:id", product.update);
  
    // // Delete a Tutorial with id
    router.delete("/:id", favorit.deleteProduct);

    app.use('/favorite', router);
  
  };