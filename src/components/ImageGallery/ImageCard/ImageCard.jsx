import styles from "./ImageCard.module.css";

function ImageCard({ image, onClick }) {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
        onClick={handleClick} 
      />
    </div>
  );
}

export default ImageCard;
