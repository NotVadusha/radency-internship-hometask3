import { Response, NextFunction } from "express";
import { TypedRequestParams } from "../interfaces/IRequest";
import { HttpError } from "../helpers/errors";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";

const validateIDMidlleware = async (
  req: TypedRequestParams<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      throw new HttpError({
        name: "Id error",
        httpCode: StatusCodes.BAD_REQUEST,
        message: "There is no id in params",
      });
    next();
  } catch (error) {
    next(error);
  }
};

export { validateIDMidlleware };
