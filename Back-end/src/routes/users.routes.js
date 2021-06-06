module.exports = (app) => {
  const users = require("../controllers/user.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", users.create);

  router.post("/auth", users.login);

  // Retrieve all users
  router.get("/", users.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", users.findOne);

  // Update a Tutorial with id
  router.put("/:id", users.update);

  // Delete a Tutorial with id
  router.delete("/:id", users.delete);

  app.use("/users", router);

  //me parece que aqui iria la ruta user/me para que de aqui mandarlo a hacer toda esa chamba del localstorege
};
