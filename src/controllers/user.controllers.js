import {asyncHandler} from "../utils/asyncHandler.js";
const registerUser=asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"server is running ok"
    })
})
export {registerUser,}