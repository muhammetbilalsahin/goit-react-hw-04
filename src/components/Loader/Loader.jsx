import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader .spinner}>
    
      <ClipLoader color="#3498db" size={20} />
      <p>Yükleniyor...</p>
    </div>
  );
}

export default Loader;
