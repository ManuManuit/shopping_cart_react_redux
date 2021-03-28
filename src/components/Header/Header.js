import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import './Header.css';

const Header = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.quantity;
        });
        setCartCount(count);
    }, [cart, cartCount])

    return (
        <div className="header">
            <div className="header__title">
                <h2>Tu carrito de la compra</h2>
            </div>
            <div className="header__itemCount">
                <h2>Items: {cartCount}</h2>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(Header);
