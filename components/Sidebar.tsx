import Link from 'next/link';
import styles from '../styles/Sidebar.module.scss';

type Artist = {
  id: number;
  name: string;
  artworkIds: number[];
};


const artists: Artist[] = Array.from({ length: 37 }, (_, i) => ({
  id: i + 1,
  name: `Artist ${i + 1}`,
  artworkIds: [i + 1], 
}));

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
        <ul className={styles.artistList}>
          {artists.map((artist) => (
            <li key={artist.id}>
              <h2>{artist.name}</h2>
              <ul>
                {artist.artworkIds.map((artworkId) => (
                  <li key={artworkId}>
                    <Link href={`/artist/${artist.id}`}>
                      Artwork {artworkId}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
