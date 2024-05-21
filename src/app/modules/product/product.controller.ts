import { Request, Response } from "express"
import { ProductService } from "./product.service"

const getAllProducts = async (req: Request, res: Response) => {
    const result = await ProductService.getAllProductsFromDb()
    res.send(result)
}



export const ProductController = {
    getAllProducts
}



