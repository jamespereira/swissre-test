import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    const className = styles[props.theme]

    return (
        <button className={className}>
            {props.children}
        </button>
    );
};

export default Button;