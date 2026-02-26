import type { Request, Response } from "express";
import { Query } from "../types/ProductQuery.js";


export const updateProductById = (
  req: Request<{ id: string }, {}, { name: string; price: number }>,
  res: Response,
) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res
      .status(400)
      .json({ message: "Product name and price are required" });
  }
  return res.json({ name, price });
};



export const ProductQuery = (req: Request<{},{},{}, Query>, res: Response) => {
const { page, limit } = req.query;

return res.json(`page ${page} with ${limit}`); 
};
