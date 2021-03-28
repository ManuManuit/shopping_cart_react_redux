import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    products: [{
        id: 1,
        title: "Producto 1",
        description: "Descripción de producto 1",
        price: 15,
    },
    {
        id: 2,
        title: "Producto 2",
        description: "Descripción de producto 2",
        price: 20,
    },
    {
        id: 3,
        title: "Producto 3",
        description: "Descripción de producto 3",
        price: 25,
    }],
    cart: [], //id, title, description, price, img, quantity
    currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //Find if exists product
            const item = state.products.find(prod => prod.id === action.payload.id);
            //Check if Item is in cart already
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, quantity: 1 }]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            }
        case actionTypes.ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id
                    ? { item, quantity: action.payload.quantity }
                    : item),
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
        default:
            return state;
    }
}

export default shopReducer;