type ArtworkCardProps = {
  title: string;
  artist: string;
  price: string;
};

const ArtworkCard = ({ title, artist, price }: ArtworkCardProps) => {
  return (
    <div className="artwork-card">
      <h2>{title}</h2>
      <p>by {artist}</p>
      <p>{price}</p>
    </div>
  );
};

export default ArtworkCard;
