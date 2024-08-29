// import styles from '../styles/ArtworkCard.module.scss';

// const ArtworkCard = ({ title, artist, price, description, image }: any) => {
//   return (
//     <div className={styles.card}>
//       <img src={image} alt={title} className={styles.image} />
//       <div className={styles.content}>
//         <h2 className={styles.title}>{title}</h2>
//         <p className={styles.artist}>by {artist}</p>
//         <p className={styles.price}>{price}</p>
//         <p className={styles.description}>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ArtworkCard;




import Image from 'next/image';
import '../styles/ArtworkCard.module.scss'; 

const ArtworkCard = ({ title, artist, price, description, image }: any) => {
  return (
    <div className="card">
      <Image
        src={image}
        alt={title}
        className="image"
        layout="responsive"
        width={500} // Adjust width as needed
        height={300} // Adjust height as needed
      />
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="artist">by {artist}</p>
        <p className="price">{price}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ArtworkCard;

