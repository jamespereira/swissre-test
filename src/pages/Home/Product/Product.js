import React from 'react';
import styles from './Product.module.css';

const Product = (props) => {
    return (
        <div className={styles.tileContainer}>
            <img className={styles.tileIcon} src={props.icon} alt={props.icon} />
            <h2 className={styles.tileTitle}>{props.title}</h2>
            <p className={styles.tileDescription}>{props.description}</p>
        </div>
    );
};

export default Product;