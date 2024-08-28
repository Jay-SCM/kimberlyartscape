type ArtistProfileProps = {
  artistId: string;
};

const ArtistProfile = ({ artistId }: ArtistProfileProps) => {
  return (
    <div className="artist-profile">
      <h2>Artist Name</h2>
      <p>Biography of the artist with ID: {artistId}</p>
      {/* Display more detailed artist info */}
    </div>
  );
};

export default ArtistProfile;
