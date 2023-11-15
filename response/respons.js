const response = (status,data,message,res)=>{
    res.json({
        status : status,
        data: data,
        message: message
    })
}

module.exports= response
