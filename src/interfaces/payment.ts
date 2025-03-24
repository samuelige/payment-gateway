export class InitializeTransaction {
    productId!: string;
    name!: string;
    email!:string;
}

export enum PaymentStatus {
    completed = 'completed',
    notPaid = 'notPaid',
}