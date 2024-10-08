import axios from "axios";
import { response } from "express";

export const  GetCountriesByCode =async(req,res)=>{
    const { code } = req.params;


    try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    res.json(response.data);

        
    } catch (error) {
        res.status(500).json({message:'Error in fetching countries details'})
        
    }

}