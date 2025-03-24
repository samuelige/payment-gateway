import axios from 'axios';
import { InitializeTransaction } from "@app/interfaces/payment";
import { Payment } from "@app/models/payment";
import { Product } from '@app/models/product';
import { PAYSTACK_CALLBACK_URL, PAYSTACK_SECRET_KEY, PAYSTACK_SUCCESS_STATUS, PAYSTACK_TRANSACTION_INI_URL, PAYSTACK_TRANSACTION_VERIFY_BASE_URL } from "@app/server/config";

/**
 * Initialize payment
 * @param productId
 * @param name
 * @param email
 * @returns {Promise<Payment>}
 */

export const initializePayment = async (data: InitializeTransaction): Promise<Payment | null> => {
    const { productId, name, email } = data;
    // @ts-ignore
    const product = await Product.findOne({ where: { id: productId } });

    if (!product) return null;
    // @ts-ignore
    if (typeof product?.price !== "number") throw new Error("Invalid product price");

    const user = { id: 1, name, email };
    
    const metadata = {
        user_id: user.id,
        // @ts-ignore
        product_id: product.id,
        custom_fields: [
            { display_name: "Name", variable_name: "name", value: user.name },
            { display_name: "Email", variable_name: "email", value: user.email }
        ]
    };

    const payload = {
        email: user.email,
        // @ts-ignore
        amount: product.price * 100, 
        metadata,
        callback_url: PAYSTACK_CALLBACK_URL || undefined
    };

    try {
        const response = await axios.post(PAYSTACK_TRANSACTION_INI_URL, payload, {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
                "Content-Type": "application/json"
            }
        });

        if (response.data.status) {
            return await Payment.create({
                transactionReference: response.data.data.reference,
                paymentLink: response.data.data.authorization_url,
                // @ts-ignore
                productId: product.id
            });
        }
    } catch (error: any) {
        console.error("Paystack API Error:", error.response?.data || error.message);
    }
    
    return null;
};

export const verifyPayment = async (reference:string): Promise<Payment|null> => {
    if (!reference) {
        throw new Error("Transaction reference is required");
    }
    const payment = await Payment.findOne({ where: { transactionReference: reference } });
    if (!payment) {
        throw new Error("Reference cannot be found");
    };
  
    try {
        // @ts-ignore
      const response = await axios.get(`${PAYSTACK_TRANSACTION_VERIFY_BASE_URL}/${payment.transactionReference}`, {
        headers: { Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` },
      });
  
      if (response && response.data) {
        // @ts-ignore
        payment.status = response.data.data.status === PAYSTACK_SUCCESS_STATUS ? 'completed' : 'notPaid';
        // @ts-ignore
        payment.transactionStatus = response.data.data.status;
        return await payment.save();
      }
    } catch (error) {
      console.error(error);
      throw new Error("Payment verification failed");
    }
    return null;
  };

export const getPayment = async (): Promise<Payment[]> => {
    return await Payment.findAll();
};