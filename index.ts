import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import cors from 'cors';

import config from '@configs/server';
import handleError from '@helpers/handleError';
import '@configs/database';

import Users from '@routes/Users';
import Products from '@routes/Products';
import Sells from '@routes/Sells';
import Stores from '@routes/Stores';
import { ROUTE, SESSION_CONFIG } from '@constants/sessionConfig';

console.clear();

const app = express();
const PORT = config.server.port;

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use(handleError);
app.set('trust proxy', 1);
app.use(session(SESSION_CONFIG));

app.use(`${ROUTE}/users`, Users);
app.use(`${ROUTE}/products`, Products);
app.use(`${ROUTE}/sells`, Sells);
app.use(`${ROUTE}/stores`, Stores);

app.listen(PORT, () => {
  console.log(`🦋 >> ${PORT}`);
});
