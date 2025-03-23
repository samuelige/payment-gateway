import express, { Express } from 'express';
import PaymentServer from './server';
import { databaseConnect } from './server/database';
const initializeApp = (): void => {
    const app: Express = express();
    const paymentServer = new PaymentServer(app);
    databaseConnect().then(()=>{
        paymentServer.start();
    });
}

initializeApp();