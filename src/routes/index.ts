import { Express } from 'express';
import paymentRoutes from './payment.routes';
import productRoutes from './product.route';
import notFound from '@app/middleware/notFound';
import errorHandlerMiddleware from '@app/middleware/errorHandler';

export const setupRoutes = (app: Express) => {
    app.use('/api/v1/payment', paymentRoutes);
    app.use('/api/v1/product', productRoutes);
    app.use(notFound);
    app.use(errorHandlerMiddleware);
};