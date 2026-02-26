import express from "express";
import { ProductQuery, updateProductById } from "../controllers/product.controller.js";

const router = express.Router();

router.put("/:id", updateProductById);
router.get("/", ProductQuery);

export default router;
