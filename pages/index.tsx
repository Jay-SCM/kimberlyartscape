// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import ArtworkCard from '../components/ArtworkCard';
// import styles from '../styles/HomePage.module.scss'; 

// const HomePage = () => {
//   return (
//     <div>
//       <Header />
//       <main className={styles.mainContent}>
//         <div className={styles.artworksGrid}>
//           <ArtworkCard title="Art 1" artist="Artist A" price="$100" />
//           <ArtworkCard title="Art 2" artist="Artist B" price="$200" />
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;


import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArtworkCard from '../components/ArtworkCard';
import styles from '../styles/HomePage.module.scss';

const HomePage = () => {
  const [artworks, setArtworks] = useState<any[]>([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('/api/artworks');
        setArtworks(response.data);
      } catch (error) {
        console.error("Error fetching artworks:", error);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.artworksGrid}>
          {artworks.length > 0 ? (
            artworks.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                title={artwork.title}
                artist={artwork.artist}
                price={artwork.price}
                description={artwork.description}
                image={artwork.image_url}
              />
            ))
          ) : (
            <p>No artworks available.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
