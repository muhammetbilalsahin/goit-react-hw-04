import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ data, onClose }) {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.imageWrapper}>
        <img
          src={data.urls.regular}
          alt={data.alt_description || "Photo"}
          className={styles.image}
        />
        <button onClick={onClose} className={styles.closeBtn}>
          &times;
        </button>
        <div className={styles.caption}>
          <p><strong>Photo by:</strong> {data.user?.name ?? "Unknown"}</p>
          <p><strong>Username:</strong> @{data.user?.username ?? "unknown"}</p>
          <p><strong>Likes:</strong> ❤️ {data.likes ?? 0}</p>
          <p><strong>Resolution:</strong> {data.width} x {data.height}</p>
          <p><strong>Date:</strong> {new Date(data.created_at).toLocaleDateString()}</p>
          <p>
            <a href={data.links?.download} target="_blank" rel="noopener noreferrer">
              📥 Download Photo
            </a>
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;
