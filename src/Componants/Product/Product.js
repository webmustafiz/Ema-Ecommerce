import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // const { handleClicked } = props;
    const { name, seller, img, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            {/* <img src={`img ? : 'undefined'`} alt="" /> */}
            <div className="product-info">
                <p className='name'>{name}</p>
                <p>${price}</p>
                <p><small> Seller : {seller}</small></p>
                <p>Ratings : { ratings}</p>
            </div>
            <button onClick={()=>props.handleClicked(props.product)} className='btn-cart'>
            {/* <button onClick={(props.handleClicked)} className='btn-cart'> */}
                <p>Add to cart</p>
                <FontAwesomeIcon className='shoppingcart' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;