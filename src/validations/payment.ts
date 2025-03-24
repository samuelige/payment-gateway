import { number, object, string } from "yup";

const name = string()
.required('User name is required.')
.min(4, 'User name should have at least 4 characters.')
.max(20, 'User name should have at most 20 characters.')
const email = string().required('Email is required.').email('This is invalid email.');
const productId = number().required('Product ID is required.')

export const IntializeProductRules = object().shape({
    name,
    email,
    productId 
});