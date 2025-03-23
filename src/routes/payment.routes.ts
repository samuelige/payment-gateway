import { getPayment, initializePayment, paymentWebhook, verifyPayment } from '@app/controller/payment.controll';
import { Router } from 'express';

const paymentRoutes = Router();

paymentRoutes.get('/', getPayment);
paymentRoutes.get('/:id', getPayment);
paymentRoutes.post('/initialize', initializePayment);
paymentRoutes.get('/callback', verifyPayment);
paymentRoutes.get('/webhook', paymentWebhook);

export default paymentRoutes;