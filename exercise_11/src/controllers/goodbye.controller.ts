import type { Request, Response } from "express";

interface goodbyeReq extends Request {
  query: {
    name: string;
  };
}

export const sayGoodbye = (req: goodbyeReq, res: Response) => {
  const name = req.query.name;

  if (typeof name !== "string") {
    return res.status(400).json({
      error: "Name query parameter is required and must be a string.",
    });
  }

  return res
    .status(200)
    .json({ goodbyeMessage: `farewell: "Goodbye, ${name}"` });
};
