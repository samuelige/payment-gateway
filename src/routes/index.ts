import { Express } from 'express';
import paymentRoutes from './payment.routes';

export const setupRoutes = (app: Express) => {
    app.use('/api/v1/payment', paymentRoutes);
};