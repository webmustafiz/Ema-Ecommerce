import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    // total
    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price *product.quantity;
    }

    // shipping 
    let shipping = 0;
    for (const product of cart) {
        shipping = shipping + product.shipping;
    }

    // tax
    const tax = parseFloat((total * 0.1).toFixed(2));

    // grand total 
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>selected item : {quantity}</p>
            <p>Price : $ { total}</p>
            <p>Shipping : $ { shipping}</p>
            <p>Tax : $ { tax}</p>
            <p>Grand Total : $ { (grandTotal).toFixed(2)}</p>
        </div>
    );
};

export default Cart;