import styles from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.button} onClick={onClick}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreBtn;
