const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const jwt_screct = process.env.JWT_SCRECT;


module.exports.authMiddleware =(req, res, next) => {
    const token = req.header('token');
    if(!token){
        return res.status(401).json({
            status: 'Unauthorized'
        });
    }
    try {
        const decode = jwt.verify(token, jwt_screct);
        id = decode.user.id;
        next();
    } catch (error) {
        res.json({status:'failed', message: "Session Expired", error: error});
    }
}
