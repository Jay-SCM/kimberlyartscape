
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss'; 

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/artworks">Artworks</Link></li>
                <li><Link href="/cart">Cart</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/sylvanas">Sylvanas</Link></li> {/* New page link */}
            </ul>
        </nav>
    );
};

export default Navbar;


