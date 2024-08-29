import React from 'react';
import styles from '../styles/DisplayCard.module.scss'; // Make sure this file exists and is correctly named

interface Artwork {
    id: number;
    title: string;
    url: string;
    artist: string;
    price: number;
}

const DisplayCard: React.FC<{ artwork: Artwork }> = ({ artwork }) => {
    return (
        <div className={styles.card}>
            <img src={artwork.url} alt={artwork.title} className={styles.image} />
            <h2 className={styles.title}>{artwork.title}</h2>
            <p className={styles.artist}>{artwork.artist}</p>
            <p className={styles.price}>${artwork.price.toFixed(2)}</p>
        </div>
    );
};

export default DisplayCard;
