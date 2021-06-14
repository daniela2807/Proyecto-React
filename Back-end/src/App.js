const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config({path: './env'});

const app = express();
  
  app.use(cors());
  
  // parse requests of content-type - application/json
  app.use(bodyParser.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

//const productsRouter = require("./products.routes");

// Configuring the database
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });




// settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas
require("./routes/users.routes")(app);
require("./routes/products.routes")(app);
require("./routes/category.routes")(app);
require("./routes/address.routes")(app);

//iniciamos servidor
app.listen(app.get('port'),() =>{
    console.log(`Servidor en puerto ${app.get('port')}`);
})

