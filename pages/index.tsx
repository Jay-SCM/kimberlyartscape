import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayCard from '../components/DisplayCard';
import styles from '../styles/HomePage.module.scss';

interface Artwork {
    id: number;
    title: string;
    url: string;
    artist: string;
    price: number;
}

const IndexPage = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([]);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const response = await axios.get('http://localhost:7070/api/artworks');
                setArtworks(response.data);
            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };

        fetchArtworks();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Artworks</h1>
            <div className={styles.grid}>
                {artworks.length > 0 ? (
                    artworks.map((artwork) => (
                        <DisplayCard key={artwork.id} artwork={artwork} />
                    ))
                ) : (
                    <p>No artworks available</p>
                )}
            </div>
        </div>
    );
};

export default IndexPage;



