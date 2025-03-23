export type PaystackCreateTransaction = {
    amount: number;
    email: string;
    callback_url?: string;
    metadata: PaystackMetadata;
};
  
export type PaystackMetadata = {
    user_id: number;
    product_id: string;
    callback_url?: string;
    custom_fields: PaystackMetadataCustomField[];
};
  
export type PaystackMetadataCustomField = {
    display_name: string;
    variable_name: string;
    value: string | number;
};
  
export type PaystackCreateTransactionResponse = {
    status: boolean;
    message: string;
    data: { authorization_url: string; access_code: string; reference: string };
};
  
export type PaystackVerifyTransactionResponse = {
    status: boolean;
    message: string;
    data: {
        status: string;
        reference: string;
    };
};
  
export type PaystackWebhook = {
    event: string;
    data: Data;
};
  
export type Data = {
    id?: number;
    domain?: string;
    status?: string;
    reference?: string;
    amount?: number;

    gateway_response?: string;
    paid_at?: string;
    created_at?: string;
    channel?: string;
    currency?: string;
    ip_address?: string;
    metadata?: any;

    message?: any;
    fees: any;
    log: any;
    customer: any;
    authorization: any;
    plan: any;
};
  
export class PaystackCallback {
    reference!: string;
}