import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;


    const total = cart.reduce((total, crs) => total + crs.price ,0);
    return (
        <div className = "container order-area">
            <h1>Order Summary</h1>
    <h5>Items Order {cart.length}</h5>
    <h5>Total Price : {total} Taka</h5>

    <br/>
    <button className="btn btn-warning">Order Now</button>


        </div>
    );
};

export default Cart;