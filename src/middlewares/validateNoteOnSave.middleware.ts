import { Request, NextFunction, Response } from "express";
import NotesDB from "../helpers/database.helpers";

const validateNoteOnSaveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const note = new NotesDB({ ...req.body });
    const error = await note.validate({
      pathsToSkip: ["created_at"],
    });
    next();
  } catch (error) {
    next(error);
  }
};

export { validateNoteOnSaveMiddleware };
