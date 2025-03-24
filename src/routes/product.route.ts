import { createProductController, getProductController } from '@app/controller/product.controller';
import { Router } from 'express';

const productRoutes = Router();

productRoutes.post('/create', createProductController);
productRoutes.get('/', getProductController);
// productRoutes.get('/:id', );

export default productRoutes;