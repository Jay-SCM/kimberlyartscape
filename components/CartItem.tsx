type CartItemProps = {
  title: string;
  artist: string;
  price: string;
};

const CartItem = ({ title, artist, price }: CartItemProps) => {
  return (
    <div className="cart-item">
      <h2>{title}</h2>
      <p>by {artist}</p>
      <p>{price}</p>
      {/* Add remove or quantity buttons if needed */}
    </div>
  );
};

export default CartItem;
