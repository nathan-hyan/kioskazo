import express from 'express';
import Products from '@controllers/Products';
import isAuth from 'middlewares/isAuth';
import { UserAuthLevel } from '@constants/userTypes';

const router = express.Router();

router.get('/get', Products.getProducts);
router.get('/getSingle/:id', Products.getSingleProduct);
router.post('/create', isAuth(UserAuthLevel.STORE_OWNER), Products.createProduct);
router.put('/edit/:id', isAuth(UserAuthLevel.STORE_OWNER), Products.editProduct);
router.delete('/delete/:id', isAuth(UserAuthLevel.STORE_OWNER), Products.deleteProduct);
router.get('/assignId', isAuth(UserAuthLevel.ADMIN), Products.doIdForProducts);

export = router;
