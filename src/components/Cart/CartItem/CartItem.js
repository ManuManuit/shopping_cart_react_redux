
import React, { useState } from "react";

import { connect } from "react-redux";
import {
    adjustQuantity,
    removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
    const [input, setInput] = useState(item.quantity);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(item.id, e.target.value);
    };

    return (
        <div className="cartItem">

            <div className="cartItem__details">
                <p className="details__title">{item.title}</p>
                <p className="details__desc">{item.description}</p>
                <p className="details__price">{item.price} €</p>
            </div>
            <div className="cartItem__actions">
                <div className="cartItem__qty">
                    <label htmlFor="qty">Quantity</label>
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />
                </div>
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="actions__deleteItemBtn"
                >
                    Borrar
        </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id, value) => dispatch(adjustQuantity(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(null, mapDispatchToProps)(CartItem);