const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const Registered = require('../models/register-model');

dotenv.config();
const jwt_screct = process.env.JWT_SCRECT;


module.exports.signup = async (req,res) => {
    try {
        const { username, email, password } = req.body;
        let hasedPassword = await bcrypt.hash(password, 10);
        await Registered.create({
            username,
            email,
            password: hasedPassword
        });
        res.json({
            status: 'ok',
            message: 'Registered Successfully'
        });
    } catch (error) {
        console.log(error);
        res.json({ status: 'failed', message: error });
    }
}

module.exports.login = async (req,res) => {
    try {
        const { email, password } = req.body;
        const exist = await Registered.findOne({ email });
        if (!exist) {
            return res.json({ status: 'fail', message: 'No User Found' });
        }
        const passwordCheck = await bcrypt.compare(password, exist.password);
        if (passwordCheck) {
            let payload = {
                user: {
                    id: exist._id
                }
            };
            jwt.sign(payload, jwt_screct, { expiresIn: '2h' },
                (err, token) => {
                    if (err) throw err;
                    return res.json({ token, status: 'ok' })
                }
            )
        } else {
            return res.json({ status: 'fail', message: 'Password is incorrect' });
        }
    } catch (error) {
        console.log(error);
        return res.json({ status: 'fail', message: error });
    }
}