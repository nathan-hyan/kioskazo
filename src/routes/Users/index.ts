import express from 'express';
import Users from '@controllers/Users';
import isAuth from 'middlewares/isAuth';
import { UserAuthLevel } from '@constants/userTypes';

const router = express.Router();

router.post('/create', isAuth(UserAuthLevel.ADMIN), Users.createUser);
router.put('/edit/:id', isAuth(UserAuthLevel.ADMIN), Users.editUser);
router.delete('/delete/:id', isAuth(UserAuthLevel.ADMIN), Users.deleteUser);

router.post('/auth/login', Users.loginUser);
router.post('/auth/logout', isAuth(), Users.logoutUser);

export = router;
