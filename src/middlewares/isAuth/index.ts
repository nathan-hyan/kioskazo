import { UserAuthLevel } from '@constants/userTypes';
import createError from '@helpers/createError';
import { NextFunction, Request, Response } from 'express';
import { MESSAGES } from './constants';

const isAuth = (authLevelRequired: UserAuthLevel = UserAuthLevel.EMPLOYEE) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('Checking auth level needed:', authLevelRequired);
  console.log('Checking user auth level:', req.session.type);

  if (!req.session.isAuth) {
    createError(next, res, MESSAGES.AuthError, 401);
  }

  if (authLevelRequired < req.session.type) {
    createError(next, res, MESSAGES.NotAllowed, 417);
  }

  next();
};

export default isAuth;
