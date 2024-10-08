import express from 'express'
import { GetCountries } from '../controllers/GetCountries.js';
import { GetCountriesByCode } from '../controllers/GetCountriesByCode.js';

const router = express.Router();
router.get("/countries",GetCountries);
router.get("/countries/:code",GetCountriesByCode)

export default router;