import { getPaymentController, initializePaymentController, verifyPaymentController } from '@app/controller/payment.controller';
import { Router } from 'express';

const paymentRoutes = Router();

paymentRoutes.get('/', getPaymentController);
paymentRoutes.post('/initialize', initializePaymentController);
paymentRoutes.get('/verify/:reference', verifyPaymentController);
// paymentRoutes.get('/webhook', paymentWebhook);

export default paymentRoutes;