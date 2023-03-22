import jwt from "jsonwebtoken";

const auth = async (req,res,next) =>{

    //token is present in array[1] index of header
    //want to like a post
    //click on the post => auth middleware to (NEXT) 

    try{
    
    
    const token  = req.headers.authoriaztion.split(' ')[1];
    
    console.log(req.headers.authoriaztion);
    //token length is greater than 500 then token is coming from google but this token is custom so it will be of length less than 500

    let decodedData;
    decodedData = jwt.verify(token , 'secrete');
     // getting id of that 
    req.usedId = decodedData ?.id;
    
    next();
    }
    catch(error){
        console.log(error);
    }
    
}

export default auth;