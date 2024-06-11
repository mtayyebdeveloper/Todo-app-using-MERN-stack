
const AdminVerification =async (req,res,next)=>{
    try {
        const admin =req.user.isAdmin;
        if(!admin){
            return  res.status(201).json({massage:"You are not admin."})
        }
        next();
    } catch (error) {
        next(error)
    }
}

export {AdminVerification}