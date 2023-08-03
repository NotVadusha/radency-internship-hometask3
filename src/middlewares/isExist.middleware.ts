import { Response, NextFunction } from "express";
import notesService from "../repositories/notes.repository";
import { HttpError } from "../helpers/errors";
import { TypedRequestParams } from "../interfaces/IRequest";
import { StatusCodes } from "http-status-codes";

const isExistMiddleware = async (
  req: TypedRequestParams<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const note = await notesService.getOne(req.params.id);
    if (!note) {
      throw new HttpError({
        name: "Not found",
        httpCode: StatusCodes.NOT_FOUND,
        message: "Can't find note with such id",
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export { isExistMiddleware };
