import { Router } from "express";
import notesService from "../services/notes.service";
import { validateIDMidlleware } from "../middlewares/validateID.middleware";
import { isExistMiddleware } from "../middlewares/isExist.middleware";
import { validateNoteOnSaveMiddleware } from "../middlewares/validateNoteOnSave.middleware";

const router = Router();

router.get("/notes/stats", notesService.getStats);
router.get(
  "/notes/:id",
  validateIDMidlleware,
  isExistMiddleware,
  notesService.getOne
);
router.get("/notes", notesService.getAll);
router.post("/notes", validateNoteOnSaveMiddleware, notesService.create);
router.patch(
  "/notes/:id",
  validateIDMidlleware,
  isExistMiddleware,
  notesService.update
);
router.delete(
  "/notes/:id",
  validateIDMidlleware,
  isExistMiddleware,
  notesService.delete
);

export default router;
