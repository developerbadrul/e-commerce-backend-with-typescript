import { Request, Response } from "express";
import { ProductService } from "./product.service";

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm as string;
        const products = await ProductService.getProducts(searchTerm);
        res.status(200).json({
            success: true,
            message: searchTerm ? `Products matching search term '${searchTerm}' fetched successfully!` : "All products fetched successfully!",
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching products!",
            data: null
        });
    }
};

const addNewProduct = async (req: Request, res: Response) => {
    try {
        const products = req.body;
        const result = await ProductService.addProductDb(products);
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again",
            data: null
        });
    }
};

const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductService.singleProductFromDb(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Product not found!",
            data: null
        });
    }
};

const updateSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const productData = req.body;
        const updatedProduct = await ProductService.updateSingleProductFromDb(productId, productData);
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
        });
    }
};

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
};

export const ProductController = {
    getAllProducts,
    addNewProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct
};
