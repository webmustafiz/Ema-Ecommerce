import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCard, } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])
    
    useEffect(() => {
        console.log('product added before fetch')
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                // console.log('products loadaded')
            })
    },[])


    // localstorage
    useEffect(() => {
        console.log('local storage first line',products)
        const storeCard = getStoreCard()
        const saveCard = [];
        for (const id in storeCard) {
            console.log(storeCard)
            const addProduct = products.find(product => product.id === id);
            
            if (addProduct) {
                const quantity = storeCard[id]
                addProduct.quantity = quantity;
                saveCard.push(addProduct)
            }
        }
        setCart(saveCard)
        // console.log('loacal storage finished')
    }, [products])
    

// event handlar
    const handleClicked = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
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