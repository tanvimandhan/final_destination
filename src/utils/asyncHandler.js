//Method1
const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}
//Method2
// const asyncHandler=(fn)=>async(req,resizeBy,next)=>{
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(error.code|500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }

export {asyncHandler}