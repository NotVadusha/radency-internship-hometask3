import INote from "../interfaces/INote";
import IStats from "../interfaces/IStats";
import notesRepository from "../repositories/notes.repository";
import { Request, Response } from "express";

class notesService {
  async create(req: Request, res: Response) {
    const { title, content, is_archived, is_completed, category } = req.body;
    const note = await notesRepository.create({
      title,
      content,
      is_archived,
      created_at: new Date(),
      category,
    });
    res.json(note);
  }

  async getOne(req: Request, res: Response) {
    const note = await notesRepository.getOne(req.params.id);
    return res.json(note);
  }

  async getAll(req: Request, res: Response) {
    const notes = await notesRepository.getAll();
    return res.json(notes);
  }

  async update(req: Request, res: Response) {
    const { title, content, is_archived, category } = req.body;
    const updatedNote = {
      title,
      content,
      is_archived,
      category,
    };
    const toResponseNote = await notesRepository.update(
      updatedNote,
      req.params.id
    );
    return res.json(toResponseNote);
  }

  async delete(req: Request, res: Response) {
    const note = await notesRepository.delete(req.params.id);
    return res.json(note);
  }

  async getStats(req: Request, res: Response) {
    const notesArr = await notesRepository.getAll();

    const stats: IStats = {};
    notesArr.forEach((note: INote) => {
      if (Object.keys(stats).includes(`${note.category}`)) return;
      stats[`${note.category}`] = { archived: 0, active: 0 };
    });

    notesArr.forEach((note) => {
      note.is_archived
        ? stats[note.category].archived++
        : stats[note.category].active++;
    });

    return res.json(stats);
  }
}

export default new notesService();
