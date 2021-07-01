import { Router } from 'express';
import * as userController from './../controllers/userController.js';

export const router = Router();

router.post('/registration', userController.createUser);
