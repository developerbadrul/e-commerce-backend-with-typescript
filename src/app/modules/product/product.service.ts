import ProductModel from "../../models/product-data-model"
import { Product } from "./product.interface"

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

export const ProductService = {
    getAllProductsFromDb,
    addProductDb,
    singleProductFromDb
}
