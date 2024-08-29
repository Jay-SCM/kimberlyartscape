import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UploadForm from '../components/UploadForm';

interface Artwork {
  id: number;
  title: string;
}

const SylvanasPage: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('http://localhost:7070/api/artworks');
        setArtworks(response.data);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:7070/api/artworks/${id}`);
      setArtworks((prevArtworks) => prevArtworks.filter((artwork) => artwork.id !== id));
      alert('Artwork deleted successfully');
    } catch (error) {
      console.error('Error deleting artwork:', error);
      alert('Error deleting artwork');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Artworks</h1>
      <UploadForm />
      <div className="artwork-grid">
        {artworks.length > 0 ? (
          artworks.map((artwork) => (
            <div key={artwork.id} className="artwork-card">
              <img
                src={`http://localhost:7070/Artist_Artwork/${artwork.title}`}
                alt={artwork.title}
                className="artwork-image"
              />
              <button onClick={() => handleDelete(artwork.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No artworks found</p>
        )}
      </div>
    </div>
  );
};

export default SylvanasPage;
