import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Order Summary</h4>
            <p>selected item : { cart.length}</p>
        </div>
    );
};

export default Cart;