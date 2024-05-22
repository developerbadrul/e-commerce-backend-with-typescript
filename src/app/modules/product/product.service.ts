import ProductModel from "../../models/product-data-model"
import { Product } from "./product.interface"

// get and create product
const getAllProductsFromDb = async () => {
    const result = await ProductModel.find();
    return result;
}

const addProductDb = async (product: Product) => {
    const result = await ProductModel.create(product)
    return result;
}

const singleProductFromDb = async (id: string) => {
    const product = await ProductModel.findById(id)
    return product
}

// update product

const upadteSingleProductFromDb = async (id: string, productData: Product) => {
    const product = await ProductModel.findByIdAndUpdate(id, productData, { new: true })
    return product
}


// delete product
const deleteProductFromDb = async (productId: string) => {
    const product = await ProductModel.findByIdAndDelete(productId)
    return product
}

export const ProductService = {
    getAllProductsFromDb,
    addProductDb,
    singleProductFromDb,
    upadteSingleProductFromDb,
    deleteProductFromDb
}
