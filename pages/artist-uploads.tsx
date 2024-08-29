

import { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/ArtistUploads.module.scss';

const ArtistUploads = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('artist', artist);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('image', image);

      try {
        await axios.post('http://localhost:7070/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('Artwork uploaded successfully!');
        setTitle('');
        setArtist('');
        setPrice('');
        setDescription('');
        setImage(null);
      } catch (error) {
        console.error("Error uploading artwork:", error);
        alert('Error uploading artwork.');
      }
    }
  };

  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <form onSubmit={handleSubmit} className={styles.uploadForm}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Artist"
            required
          />
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
          <input
            type="file"
            onChange={(e) => e.target.files && setImage(e.target.files[0])}
            accept="image/*"
            required
          />
          <button type="submit">Upload Artwork</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ArtistUploads;
