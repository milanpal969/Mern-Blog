import express from 'express'
import { signup, signin } from '../controlers/auth.controler.js'; // Corrected typo

const router = express.Router();

router.post('/signup', signup); // Corrected endpoint name
router.post('/signin', signin); // Corrected endpoint name

export default router;
