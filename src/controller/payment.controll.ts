import { Request, Response } from 'express';

export const initializePayment = (_req: Request, res: Response) => {
    res.status(200).json({ message: 'Fetching transactions' });
};
export const verifyPayment = (_req: Request, res: Response) => {
    res.status(200).json({ message: 'Fetching transactions' });
};
export const getPayment = (_req: Request, res: Response) => {
    res.status(200).json({ message: 'Fetching transactions' });
};
export const paymentWebhook = (_req: Request, res: Response) => {
    res.status(200).json({ message: 'Fetching transactions' });
};
