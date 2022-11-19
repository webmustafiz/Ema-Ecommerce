import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoreCard, } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products=useLoaderData()
    const [cart, setCart] = useState([])
  
    // localstorage
    useEffect(() => {
        const storeCard = getStoreCard()
        const saveCard = [];
        for (const id in storeCard) {
            const addProduct = products.find(product => product.id === id);
            
            if (addProduct) {
                const quantity = storeCard[id]
                addProduct.quantity = quantity;
                saveCard.push(addProduct)
            }
        }
        setCart(saveCard)      
        
}, [products])
    const handleClicked = (product) => {
        let newCart = [];
        const exist = cart.find(element => element.id === product.id);
        console.log(exist);
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product];    
        }
        else {
            const restProduct = cart.filter(element => element.id !== product.id)
            console.log(restProduct)
            exist.quantity = exist.quantity + 1;
            newCart = [...restProduct, exist]
        }
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product
                            handleClicked={handleClicked}
                            key={product.id}
                            product={product}
                            Catagory={ product.category}
                        ></Product>)
                    }
                </div>
                <div className="card-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;