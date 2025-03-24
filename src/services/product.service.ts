import { CreateProduct } from "@app/interfaces/product";
import { Product } from "@app/models/product";
import { Model } from "sequelize";

/**
 * Create a new monitor
 * @param data
 * @returns {Promise<CreateProduct>}
 */
export const createProduct= async (data: CreateProduct): Promise<CreateProduct> => {
    try {
      const result: Model = await Product.create({...data});
      return result.dataValues;
    } catch (error) {
      throw new Error(error as any);
    }
};

export const getProduct = async (): Promise<Product[]> => {
    return await Product.findAll();
};