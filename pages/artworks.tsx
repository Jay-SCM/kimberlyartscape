
import Link from 'next/link';
import styles from '../styles/Artworks.module.scss';

const artworks = Array.from({ length: 37 }, (_, i) => {
  const id = i + 1;
  const src = id === 1 ? `/assets/1.jpg` : `/assets/1 (${id}).jpg`;
  return { id, src, title: `Art ${id}`, artistId: `artist-${id}` };
});

const ArtworksPage = () => {
  return (
    <div className={styles.artworksContainer}>
      <h1>Artworks</h1>
      <div className={styles.artworksGrid}>
        {artworks.map((art) => (
          <Link key={art.id} href={`/artist/${art.artistId}`} passHref>
            <div className={styles.artworkItem}>
              <img src={art.src} alt={art.title} />
              <h2>{art.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArtworksPage;

