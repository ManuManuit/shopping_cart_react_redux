import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Product.module.css'

import { connect } from 'react-redux';
import { addToCart } from '../../../redux/Shopping/shopping-actions';

const Product = ({ productData, addToCart }) => {
    return (
        <div className={styles.product}>

            <div className={styles.product__details}>
                <p className={styles.details__title}>
                    {productData.title}
                </p>
                <p className={styles.details__desc}>
                    {productData.description}
                </p>
                <p className={styles.details__price}>
                    {productData.price}
                </p>
            </div>

            <div className={styles.product__buttons}>
                <button className={`${styles.buttons_btn} ${styles.buttons_view}`}>
                    Ver producto
                    </button>

                <button onClick={() => addToCart(productData.id)} className={`${styles.buttons_btn} ${styles.buttons_add}`}>
                    Añadir al carrito
                    </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    }
}

export default connect(null, mapDispatchToProps)(Product);
