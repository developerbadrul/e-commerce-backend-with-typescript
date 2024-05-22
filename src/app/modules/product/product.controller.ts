import { Request, Response } from "express"
import { ProductService } from "./product.service"

// get all product 

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

// create product

const addNewProduct = async (req: Request, res: Response) => {

    try {
        const products = req.body
        // console.log(products);
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

// get single product 

const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        // console.log(productId);
        const result = await ProductService.singleProductFromDb(productId)
        res.status(200).json({
            "success": true,
            "message": "Product fetched successfully!",
            "data": result
        })
    } catch (error) {
        res.status(404).json({
            "success": false,
            "message": "Product Not Found!",
            "data": null
        })
    }
}

//update single product

const updateSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const productData = req.body;
        // console.log(productId, productData);

        const updatedProduct = await ProductService.upadteSingleProductFromDb(productId, productData);
        if (updatedProduct) {
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: updatedProduct
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Product not found!",
                data: null
            });
        }
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Product not found!",
            data: null
        })
    }

}

// delete single product
const deleteSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductService.deleteProductFromDb(productId);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: null
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Product not found!",
                data: null
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while deleting the product!",
            data: null
        });
    }
}


export const ProductController = {
    getAllProducts,
    addNewProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct
}



