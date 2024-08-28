import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../../styles/ArtistProfile.module.scss';

type Artwork = {
  id: number;
  src: string;
  title: string;
  price: string;
};

type Artist = {
  name: string;
  bio: string;
  artworks: Artwork[];
};

const generateArtistData = (id: number): Artist => ({
  name: `Artist ${id}`,
  bio: `Artist ${id} is known for their unique style and contribution to modern art.`,
  artworks: [
    { id, src: id === 1 ? `/assets/1.jpg` : `/assets/1 (${id}).jpg`, title: `Art ${id}`, price: `$${id * 10}` }
  ],
});

const artists = Array.from({ length: 37 }, (_, i) => generateArtistData(i + 1)).reduce(
  (acc, artist) => ({ ...acc, [`artist-${artist.artworks[0].id}`]: artist }),
  {} as Record<string, Artist>
);

const ArtistProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const artist = artists[id as keyof typeof artists];

  if (!artist) {
    return <p>Artist not found</p>;
  }

  return (
    <div className={styles.artistProfileContainer}>
      <h1>{artist.name}</h1>
      <p>{artist.bio}</p>
      <div className={styles.artworksGrid}>
        {artist.artworks.map((art: Artwork) => (
          <div key={art.id} className={styles.artworkItem}>
            <Image src={art.src} alt={art.title} width={300} height={300} />
            <h2>{art.title}</h2>
            <p>{art.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistProfilePage;
