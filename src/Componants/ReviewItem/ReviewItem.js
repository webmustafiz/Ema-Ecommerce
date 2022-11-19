import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product,handlerRemoveItem }) => {
    // console.log(product)
    const { name, price, quantity ,img ,shipping,id} = product;
    return (
        <div className='review-page'>
            <div className=''>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className="review-details">
                    <h5>{name} </h5>
                    <p><small>Price : $ {price}</small></p>
                    <p><small>Shipping : $ { shipping}</small></p>
                    <p><small>Quantity : $ {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>handlerRemoveItem(id)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>  
    );
};

export default ReviewItem;