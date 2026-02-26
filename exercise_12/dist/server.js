import express from "express";
import userRoutes from "./routes/user.routes.js";
// import { getProducts, updateProduct } from "./controllers/product.controller.js";
const app = express();
app.use(express.json());
// Route Mapping
app.post("/login", userRoutes);
// app.get("/products", getProducts);
// app.put("/products/:id", updateProduct);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map