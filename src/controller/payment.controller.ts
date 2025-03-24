import asyncWrapper from '@app/middleware/asyncWrapper';
import { Payment } from '@app/models/payment';
import { getPayment, initializePayment, verifyPayment } from '@app/services/payment.service';
import { IntializeProductRules } from '@app/validations/payment';
import { Request, Response } from 'express';

export const initializePaymentController = asyncWrapper(async(req:Request, res:Response) => {
    await IntializeProductRules.validate(req?.body, {abortEarly: false});
    const result: Payment|null = await initializePayment(req?.body);
    res.status(201).json({data: result});
});

export const verifyPaymentController = asyncWrapper(async(req:Request, res:Response) => {
    const {reference} = req.params;
    const result: Payment|null = await verifyPayment(reference as string);
    res.status(201).json({data: result});
});

export const getPaymentController = asyncWrapper(async(_req:Request, res:Response) => {
    const result: Payment[] = await getPayment();
    res.status(201).json({data: result});
});

export const paymentWebhook = (_req: Request, res: Response) => {
    res.status(200).json({ message: 'Fetching transactions' });
};
