import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
    const [cartItems, setCartItems] = useState(0);
    const [cartPrice, setCartPrice] = useState(0);


    useEffect(() => {
        let items = 0;
        cart.forEach((item) => {
            items += item.quantity;
        });
        setCartItems(items);
    }, [cart, cartItems])

    useEffect(() => {
        let price = 0;
        cart.forEach((item) => {
            price += item.quantity * item.price;
        });
        setCartPrice(price);
    }, [cart, cartPrice])

    return (
        <div className="cart">
            <div className="cart__items">
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div className="cart__summary">
                <h4 className="summary__title">Cart Summary</h4>
                <div className="summary__price">
                    <span>TOTAL: ({cartItems} items)</span>
                    <span>{cartPrice} €</span>
                </div>
                <button className="summary__checkoutBtn">
                    Proceed To Checkout
        </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Cart);