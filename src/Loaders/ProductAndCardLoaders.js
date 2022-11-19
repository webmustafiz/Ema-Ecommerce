import { getStoreCard } from "../utilities/fakedb"

export const ProductAndCardLoaders = async () => {
    const productsData = await fetch('products.json')
    const products = await productsData.json()

    // get card
    const saveCard = getStoreCard();
    const initialCard = [];
    for (const id in saveCard) {
        const addProduct = products.find(product => product.id === id);
        if (addProduct) {
            const quantity = saveCard[id];
            addProduct.quantity = quantity;
            initialCard.push(addProduct)
        }
    }
    return { products:products,initialCard:initialCard};
}
