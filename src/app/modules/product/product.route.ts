import express from "express"
import { ProductController } from "./product.controller";

const router = express.Router();


router.post("/products", )

router.get("/products", ProductController.getAllProducts)

export const ProductsRoute = router;