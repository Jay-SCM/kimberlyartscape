import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import styles from '../styles/CartPage.module.scss';

const CartPage = () => {
  return (
    <div>
      <Header />
      <main className={styles['cart-container']}>
        <h1>Your Cart</h1>
        <div className={styles['cart-items']}>
          <CartItem title="Art 1" artist="Artist A" price="$100" />
          <CartItem title="Art 2" artist="Artist B" price="$200" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
