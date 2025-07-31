import styles from "./ImageCard.module.css";
export default function ImageCard({ image, onImgClick }) {
  return (
    <img
      width={"400px"}
      height={"350px"}
      src={image.urls.small}
      alt={image.description}
      className={styles.image}
      onClick={() => onImgClick(image)}
    />
  );
}
