/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Response } from 'express';

/**
 * Throws an error with the error handling function of expressJs
 *
 * @param next The next function from the endpoint
 * @param message A custom message for your error
 * @param status (Optional) Status code for the error (default: 500)
 */

const createError = (next: NextFunction, res: Response, message: string, status = 500) => {
  try {
    res.status(status).json({ success: false, statusCode: status, error: message });
    throw new Error(`⚡️ >> ${message} || ${status}`);
  } catch (e: any) {
    e.status = status;
    next(e);
  }
};

export default createError;
