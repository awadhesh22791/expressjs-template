var express=require('express');
const { check, validationResult } = require('express-validator/check');
var format=require('string-format');

var statics=require('../constant/static.js');
var messages=require('../constant/message.js');
var codes=require('../constant/code.js');
var fields=require('../constant/field.js');

var router=express.Router();

router.post('/create',[
    check('name').isLength({ min:statics.DEFAULT_MIN_CHARACTER_LENGTH,max: statics.DEFAULT_CHARATER_LENGTH }).withMessage(format(messages.INVALID_LENGTH,'name',statics.DEFAULT_MIN_CHARACTER_LENGTH,statics.DEFAULT_CHARATER_LENGTH)),
    check('short_name').isLength({ min:statics.DEFAULT_MIN_CHARACTER_LENGTH,max: statics.DEFAULT_CHARATER_LENGTH }).withMessage(format(messages.INVALID_LENGTH,'short_name',statics.DEFAULT_MIN_CHARACTER_LENGTH,statics.DEFAULT_CHARATER_LENGTH)),
    check('mobile_code').isLength({ min:statics.DEFAULT_MIN_CHARACTER_LENGTH,max: 4 }).withMessage(format(messages.INVALID_LENGTH,'mobile_code',statics.DEFAULT_MIN_CHARACTER_LENGTH,4))
],function(req,res){
    var errors = validationResult(req);
    if(errors.array().length==0){
        res.json({status:statics.STATUS_SUCCESS,code:codes.SUCCESS,message:messages.DATA_FOUND,data:null});
    }else{
        res.json({status:statics.STATUS_FAILURE,code:codes.INVALID_DATA,message:messages.INVALID_DATA,data:errors.array()});
    }
});

router.get('/',function(request,response){

});

module.exports=router;