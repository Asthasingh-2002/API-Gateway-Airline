const { StatusCodes}= require('http-status-codes');

const {SuccessResponse, ErrorResponse }= require('../utils/common');
const { UserService } =require('../services');

/**
 * POST :/signup
 * req-body{email:'a@b.com', password: '1234} 
 */



async function signup(req,res){
    try {
       const user = await UserService.create({
           email: req.body.email,
           password: req.body.password
       });
       SuccessResponse.data= user;
       return res
               .status(StatusCodes.CREATED)
               .json(SuccessResponse);
    } catch (error) {
        console.log(error);
       ErrorResponse.error= error;
       return res
               .status(error.statusCode)
               .json(ErrorResponse);
   
       
    }
   }
   module.exports ={
    signup
   }