import express from 'express';
const router = express.Router();
import {getData, addData, deleteData, updateData} from './controller.js';


router.get('/', getData);
router.post('/add', addData);
router.delete('/delete/:id',deleteData);
router.put('/update/:id', updateData);

export default router;
