import { Request, Response } from "express"
import { ProductService } from "./product.service"

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductService.getAllProductsFromDb()
        res.status(200).json(
            {
                "success": true,
                "message": "Products fetched successfully!",
                "data": result
            }
        )
    } catch (error) {
        res.status(404).json(
            {
                "success": true,
                "message": "Products fetched successfully!",
                "data": null,
            }
        )
    }
}

const addNewProduct = async (req: Request, res: Response) => {

    try {
        const products = req.body
        console.log(products);
        const result = await ProductService.addProductDb(products)
        res.status(201).json({
            success: true,
            message: "Product Create Successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Wrong, Try Again",
            data: null
        })
    }
}



export const ProductController = {
    getAllProducts,
    addNewProduct
}



