const express = require("express");
const router = express.Router();


//basic home page
router.get("/", (req, res) => {
  try {

    res.render('home/index')
  } catch (e) {
    console.loge(e);
  }
});

module.exports=router;