import express from 'express';
import Sells from '@controllers/Sells';
import isAuth from 'middlewares/isAuth';
import { UserAuthLevel } from '@constants/userTypes';

const router = express.Router();

router.get('/get', isAuth(UserAuthLevel.STORE_OWNER), Sells.getSellList);
router.get('/getSingle/:id', isAuth(UserAuthLevel.STORE_OWNER), Sells.getSell);
router.post('/create', isAuth(UserAuthLevel.STORE_OWNER), Sells.createSell);
router.put('/edit/:id', isAuth(UserAuthLevel.STORE_OWNER), Sells.editSell);
router.delete('/delete/:id', isAuth(UserAuthLevel.STORE_OWNER), Sells.deleteSell);

export = router;
