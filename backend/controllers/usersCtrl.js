import User from "../model/User.js";
import bcrypt from "bcryptjs";

export const registerUserCtrl = async (req, res) =>{
    const { fullname, email, password } = req.body;

    const userExists = await User.findOne ({ email });
    if(userExists){
        res.json({
            msg: "User already exists"
        });
        return
    };

    //hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
        fullname,
        email,
        password: hashedPassword,
    });

    res.status(201).json({
        status: 'success',
        message: 'User Registered Successfully',
        data: user,
    });
};

export const loginUserCtrl = async(req, res)=>{
    const{email, password} = req.body;

    const userFound = await User.findOne({email, });
   

    if(userFound && await bcrypt.compare(password, userFound?.password)){
        res.json({
            status: "success",
            message: "User logged in successfully",
            userFound,
        });
    }else{
        res.json({
            msg: 'invalid login'
        })
    };
}
export default registerUserCtrl;


/* if(!userFound){
        return res.json({
            msg:'Invalid login details'
        })
    }
    res.json({
        msg: 'Login Successful'
    }) */