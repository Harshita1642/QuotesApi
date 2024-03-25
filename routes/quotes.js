const express=require("express");
const router=express.Router();

const {getQuote,getQuoteTest}=require("../controllers/quotes");
router.route("/").get(getQuote);
router.route("/test").get(getQuoteTest);

module.exports=router;