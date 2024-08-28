import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ArtistProfile from '../../components/ArtistProfile';

const ArtistProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <main>
        <h1>Artist Profile</h1>
        <ArtistProfile artistId={id as string} />
      </main>
      <Footer />
    </div>
  );
};

export default ArtistProfilePage;
