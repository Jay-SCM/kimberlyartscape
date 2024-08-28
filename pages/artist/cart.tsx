import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';

const CartPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Your Cart</h1>
        <div className="cart-items">
          {/* Replace with dynamic cart data */}
          <CartItem title="Art 1" artist="Artist A" price="$100" />
          <CartItem title="Art 2" artist="Artist B" price="$200" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
