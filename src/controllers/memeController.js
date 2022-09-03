const axios = require('axios')

let memeHandler = async function (req, res){
    try{
        let options = {
            method: "POST",
            url: `https://api.imgflip.com/caption_image?templateId=$(id)&text0=$(text0)&text1=$(text1)&username=Nirmal7746&password=Nirmal@7746`
        }
        
        let result = await axios(options)
        res.send({data: result.data})

    }
    catch(err){
        res.status(500).send({msg:"something is wrong", status: false})
    }
    
};

module.exports.memeHandler = memeHandler;






