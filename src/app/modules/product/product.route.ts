import express from "express"
import { ProductController } from "./product.controller";

const router = express.Router();


router.get("/products", ProductController.getAllProducts);
router.post("/products", ProductController.addNewProduct);
router.get("/products/:productId", ProductController.getSingleProduct);
router.put("/products/:productId", ProductController.updateSingleProduct);
router.delete("/products/:productId", ProductController.deleteSingleProduct)

export const ProductsRoute = router;