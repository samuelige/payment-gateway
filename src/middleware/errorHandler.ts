import { CustomAPIError } from '@app/utils/customError';
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

const errorHandlerMiddleware: ErrorRequestHandler = (err, _req: Request, res: Response, _next: NextFunction): void => {
  if (err instanceof CustomAPIError) {
    res.status(err.statusCode).json({ msg: err.message });
    return;
  }

  if (err instanceof ValidationError) {
    res.status(400).json({ msg: err.errors?.[0] });
    return;
  }

  if (err instanceof Error) {
    console.log("err---", err);
    res.status(400).json({ msg: err?.message });
    return;
  }

  console.log(typeof err);
  console.log("err---", err);

  res.status(500).json({ msg: 'Something went wrong, please try again' });
};

export default errorHandlerMiddleware;