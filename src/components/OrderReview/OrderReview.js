import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    console.log(cart)
    return (
        <div>
            <h1>{products.length}</h1>
            <h2>This is Order Review</h2>

            <h3>{cart.length}</h3>
        </div>
    );
};

export default OrderReview;