const express =require('express')
const router=express.Router();
const hc =require('../controllar/hcontrol')
router .get('/',hc.page)
router.get( '/subdata',hc.subdata)

module.exports=router