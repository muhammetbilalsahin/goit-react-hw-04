import { useState } from "react";
import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa"; // Büyüteç ikonu

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(trimmedQuery);
    setQuery("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
          <button type="submit" className={styles.iconButton}>
            <FaSearch />
          </button>
        </div>
      </form>
    </header>
  );
}

export default SearchBar;
