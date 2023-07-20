import React, { useContext } from "react";
import styles from "./SearchPlaceholder.module.scss";
import { DataContext } from "../../context/DataContext";

const SearchPlaceholder = () => {
  const dataCard = useContext(DataContext);

  return (
    <>
      <div className={styles.searchComponent}>
        <input
          onChange={(e) => dataCard.setSearchPhrase(e.target.value)}
          className={styles.searchInput}
          placeholder="Search"
          type="text"
        />
      </div>
    </>
  );
};

export default SearchPlaceholder;
