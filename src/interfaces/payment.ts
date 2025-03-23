export class InitializeTransaction {
    productId!: string;
}

export enum PaymentStatus {
    completed = 'completed',
    notPaid = 'not_paid',
}