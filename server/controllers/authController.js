import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


import User from "../models/userModel.js"

const registerUser = async (req, res) => {
    // check all filed are filled
    const { name, email, password, phone, address } = req.body

    if (!name || !email || !password || !phone || !address) {
        res.status(409)
        throw new Error("Please Fill all deatils")

    }
    // check if user exist
    let emailexist = await User.findOne({ email })
    let phoneexist = await User.findOne({ phone })
    if (emailexist || phoneexist) {
        res.status(409)
        throw new Error("User Already Exist");
        
    }
    // check phone number
    if (phone.length !== 10) {
        res.status(409)
        throw new Error("Please Enter valid phone number");
        
    }

    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hashpassword = bcrypt.hashSync(password, salt);
    // user create

    const user = await User.create({
        name: name,
        phone: phone,
        email: email,
        password: hashpassword,
        address:address
    })
    if (!user) {
        res.status(400)
        throw new Error("User Not created")
    }
    else {
        res.status(200)
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            isAdmin:user.isAdmin,
            token: genrateToken(user._id)

        })
    }

    res.send("User Registerd")
}



const loginUser = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password ) {
        res.status(409)
        throw new Error("Please Fill all deatils")

    }
    let user = await User.findOne({ email })
    // check creditials
    if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200)
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            isAdmin: user.isAdmin,
            token:genrateToken(user._id)
        })
    }
    else {
        res.status(401)
        throw new Error("Inavlid Credentials");
        
    }
}

// Token Genrate
const genrateToken = (id) => {
    let token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
    return token
    
}

const authController = {
    loginUser, registerUser
}

export default authController