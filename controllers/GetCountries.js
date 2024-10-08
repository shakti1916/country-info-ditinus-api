import axios from "axios";

export const  GetCountries =async(req,res)=>{

    try {
        const {name} = req.query;
        console.log(name)
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
        res.json(response.data)

        
    } catch (error) {
        res.status(500).json({message:'Error in fetching countries'})
        
    }

}