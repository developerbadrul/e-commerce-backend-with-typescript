import ProductModel from "../../models/product-data-model";
import { Product } from "./product.interface";

const getProducts = async (searchTerm?: string): Promise<Product[]> => {
    if (searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        return await ProductModel.find({
            name: { $regex: searchTermLower, $options: "i" }
        });
    } else {
        return await ProductModel.find();
    }
};

const addProductDb = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
};

const singleProductFromDb = async (id: string) => {
    const product = await ProductModel.findById(id);
    return product;
};

const updateSingleProductFromDb = async (id: string, productData: Product) => {
    const product = await ProductModel.findByIdAndUpdate(id, productData, { new: true });
    return product;
};

const deleteProductFromDb = async (productId: string) => {
    const product = await ProductModel.findByIdAndDelete(productId);
    return product;
};

export const ProductService = {
    getProducts,    
    addProductDb,
    singleProductFromDb,
    updateSingleProductFromDb,
    deleteProductFromDb
};
