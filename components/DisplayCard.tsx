import React from 'react';
import styles from '../styles/DisplayCard.module.scss'; // Adjust the path if necessary

interface Artwork {
    id: number;
    title: string;
    url: string;
    artist: string;
    price: number;
}

interface DisplayCardProps {
    artwork: Artwork;
}

const DisplayCard: React.FC<DisplayCardProps> = ({ artwork }) => {
    return (
        <div className={styles.card}>
            <img src={artwork.url} alt={artwork.title} className={styles.image} />
            <div className={styles.content}>
                <h2 className={styles.title}>{artwork.title}</h2>
                <p className={styles.artist}>Artist: {artwork.artist}</p>
                <p className={styles.price}>Price: ${artwork.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default DisplayCard;
