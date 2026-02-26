import type { Request, Response } from "express";
import { LoginBody } from "../types/user.js";

export const loginUser = (req: Request<{}, {}, LoginBody>, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  return res.status(200).json({ message: "Login successful" });
};
