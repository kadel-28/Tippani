const jwt= require('jsonwebtoken');

function authenticateToken(req, res, next){
    const authHeader = req.headers("authorization");
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, user)=>{
        if (err) return res.sendStatus(401);
        req.user=user;
        next();
    })
}

const errorHandler = (err) => {
    const errorMessage = err.message ? err.message : "Internal Server Error";
  
    return errorMessage;
  };
  

module.exports = {
    authenticateToken,
    errorHandler,
};