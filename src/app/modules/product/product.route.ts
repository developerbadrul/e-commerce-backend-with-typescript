import express from "express"
import { ProductController } from "./product.controller";

const router = express.Router();


router.get("/products", ProductController.getAllProducts)
router.post("/products", ProductController.addNewProduct)

export const ProductsRoute = router;