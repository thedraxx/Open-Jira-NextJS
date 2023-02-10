import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { db } from "@/database";
import { Entry } from "@/models";
import { IEntry } from "../../../models/Entry";

type Data = { message: string } | IEntry | IEntry[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid ID" + id });
  }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);

    case "GET":
      return getEntry(req, res);

    default:
      return res
        .status(400)
        .json({ message: "No existe el metodo" + req.method });
  }
}

// Actualiza una entrada por su ID
const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: "Entry not found" });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    res.status(200).json(updatedEntry);
  } catch (error) {
    await db.disconnect();
    res.status(500).json({ message: "Error al actualizar la entrada" });
  }
};

// Obtiene una entrada por su ID
const getEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();

  try {
    const EntryToGet = await Entry.findById(id);

    if (!EntryToGet) {
      await db.disconnect();
      return res.status(400).json({ message: id + " not found" });
    }

    await db.disconnect();
    res.status(200).json(EntryToGet);
  } catch (error) {
    await db.disconnect();
    res.status(500).json({ message: "Error al actualizar la entrada" });
  }
};
