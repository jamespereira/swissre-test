import React from 'react';
import Button from '../../components/Button/Button';
import Product from './Product/Product';
import Budget from './Product/budget.svg';
import Bills from './Product/bills.svg';
import Credit from './Product/credit.svg';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.content}>
                    <div className={styles.heroWrapper}>
                        <h1 className={styles.heroTitle}>It's all coming together</h1>
                        <p className={styles.heroIntro}>When you're on top of your money, life is good. We help you effortlessly manage your finances in one place.</p>
                        <div className={styles.buttonContainer}>
                            <Button theme="secondary">Sign up Free</Button>
                            <Button theme="white-outline">Questions? We Can Help</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.products}>
                <div className={styles.content}>
                    <div className={styles.productsWrapper}>
                        <Product
                            icon={Budget}
                            title={<>Budgets?<br />You betcha</>}
                            description="Easily create budgets, and see our suggestions based on your spending."
                        />
                        <Product
                            icon={Bills}
                            title={<>Bills?<br />Done</>}
                            description="Track your bills like never before. Get alerts when it's time to pay so you never miss one"
                        />
                        <Product
                            icon={Credit}
                            title={<>Credit?<br />Check</>}
                            description="Find out yours for free and get tips to help improve it, no credit card required."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;