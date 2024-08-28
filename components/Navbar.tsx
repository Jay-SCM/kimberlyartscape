import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/artworks">Artworks</Link></li>
        <li><Link href="/cart">Cart</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/admin">Admin Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
