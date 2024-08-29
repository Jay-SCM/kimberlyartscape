

import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/HomePage.module.scss';

const IndexPage = () => {
    const [artworks, setArtworks] = useState<any[]>([]);

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
            <h1 className={styles.heading}>Welcome to KimberlyArtScape</h1>
            {/* Optionally display a message or other content */}
        </div>
    );
};

export default IndexPage;




