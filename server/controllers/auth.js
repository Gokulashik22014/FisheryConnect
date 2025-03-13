import Users from "../models/users.js";

export const login = async (req, res) => {
    try {
        const {email,password}=req.body
        const result=await Users.findOne({email})
        if (!result) {
            return res.json({status:false,message:"No user"})
        } else {
            if(password!=result.password){
                return res.json({status:true,message:"Wrong password"})
            }
            return res.json({status:true,message:"success",result})
        }
    } catch (error) {
        console.log(error)
        return res.json({message:"failed"})
    }
};
export const logout = async (req, res) => {

};
export const signIn = async (req, res) => {
  try {
    const { email, username, password, role } = req.body;
    const result=await Users.create({ email, username, password, role })
    return res.json({message:"success"})
  } catch (error) {
    console.log(error);
    return res.json({message:"failed"})
  }
};
