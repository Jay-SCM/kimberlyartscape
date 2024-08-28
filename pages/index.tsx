import Header from '../components/Header';
import Footer from '../components/Footer';
import ArtworkCard from '../components/ArtworkCard';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to KimberlyArtScape</h1>
        <div className="artworks-grid">

          <ArtworkCard title="Art 1" artist="Artist A" price="$100" />
          <ArtworkCard title="Art 2" artist="Artist B" price="$200" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
