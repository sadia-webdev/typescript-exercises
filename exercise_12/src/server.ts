import express from "express";
import  userRoutes  from "./routes/user.routes.js";
import  productRoutes  from "./routes/product.routes.js";   
 
const app = express();
app.use(express.json());

// Route Mapping
app.use("/login", userRoutes);
app.use("/products", productRoutes);

app.use('/', (req,res) => res.send("Welcome to the API!"));
// app.get("/products", getProducts);
// app.put("/products/:id", updateProduct);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
