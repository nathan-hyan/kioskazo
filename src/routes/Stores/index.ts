import express from 'express';
import Stores from '@controllers/Stores';
import isAuth from 'middlewares/isAuth';
import { UserAuthLevel } from '@constants/userTypes';

const router = express.Router();

router.get('/get', isAuth(UserAuthLevel.ADMIN), Stores.getAllStores);
router.get('/getSingle/:id', isAuth(UserAuthLevel.ADMIN), Stores.getSingleStore);
router.post('/create', isAuth(UserAuthLevel.ADMIN), Stores.createStore);
router.put('/edit/:id', isAuth(UserAuthLevel.ADMIN), Stores.editStore);
router.delete('/delete/:id', isAuth(UserAuthLevel.ADMIN), Stores.deleteStore);

export = router;
