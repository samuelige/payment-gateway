import { getProduct } from './../services/product.service';
import { CreateProduct } from '@app/interfaces/product';
import asyncWrapper from '@app/middleware/asyncWrapper';
import { Product } from '@app/models/product';
import { createProduct } from '@app/services/product.service';
import { CreateProductRules } from '@app/validations';
import { Request, Response } from 'express';

export const createProductController = asyncWrapper(async(req:Request, res:Response) => {
    await CreateProductRules.validate(req?.body, {abortEarly: false});
    const result: CreateProduct| undefined = await createProduct(req?.body);
    res.status(201).json({data: result});
});

export const getProductController = asyncWrapper(async(_req:Request, res:Response) => {
    const result: Product[] = await getProduct();
    res.status(201).json({data: result});
});
