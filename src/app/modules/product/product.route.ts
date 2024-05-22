import express from "express"
import { ProductController } from "./product.controller";

const router = express.Router();

// product routers

router.get("/", ProductController.getAllProducts);
router.post("/", ProductController.addNewProduct);
router.get("/:productId", ProductController.getSingleProduct);
router.put("/:productId", ProductController.updateSingleProduct);
router.delete("/:productId", ProductController.deleteSingleProduct)

export const ProductsRoute = router;