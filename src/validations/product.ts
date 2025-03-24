import { number, object, string } from 'yup';

const productName = string()
.required('Product is required.')
.min(4, 'Product name should have at least 4 characters.')
.max(20, 'Product name should have at most 20 characters.')

const productPrice = number()
.required('Product price is required.')
.positive('Product price must be a positive number.')
.min(1, 'Product price must be at least 1.')
.max(10000, 'Product price must not exceed 10,000.');


export const CreateProductRules = object().shape({
    name: productName,
    price: productPrice,
});