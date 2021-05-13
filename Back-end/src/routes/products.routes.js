const {Router} = require("express");

const router = new Router();

router.get("/products", (req,res) =>{
    return res.status(200).json({
        "status":"OK"
    }).end()
})

module.exports = router

