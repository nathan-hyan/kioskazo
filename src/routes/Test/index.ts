import express from 'express';
import isAuth from 'middlewares/isAuth';
import { UserAuthLevel } from '@constants/userTypes';

const router = express.Router();

router.get('/admin', isAuth(UserAuthLevel.ADMIN), (req, res) => res.json({ success: true }));
router.get('/owner', isAuth(UserAuthLevel.STORE_OWNER), (req, res) => res.json({ success: true }));
router.get('/employee', isAuth(UserAuthLevel.EMPLOYEE), (req, res) => res.json({ success: true }));

export = router;
