import { Request, Response, NextFunction } from "express";
import ErrorHandler, { HttpError } from "../helpers/errors";

export const errorHandleMiddleware = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  ErrorHandler.handleError(err, res);
};
