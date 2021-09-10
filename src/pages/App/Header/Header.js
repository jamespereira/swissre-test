import React from 'react';
import Button from '../../../components/Button/Button';
import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <figure className={styles.logo} />
                </div>
                <nav className={styles.navContainer}>
                    <ul className={styles.navItems}>
                        <li className={styles.navItem}><a href="/">How it works</a></li>
                        <li className={styles.navItem}><a href="/">Credit Cards & More</a></li>
                        <li className={styles.navItem}><a href="/">Support</a></li>
                        <li className={styles.navItem}><a href="/">Blog</a></li>
                    </ul>
                </nav>
                <div className={styles.buttonContainer}>
                    <Button theme="secondary">Sign up Free</Button>
                    <Button theme="primary-outline">Log In</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;