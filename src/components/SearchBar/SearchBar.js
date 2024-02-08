import React from "react";
import styles from './SearchBar.module.css'

function SearchBar(){
    return (
        <div className={styles.div}>
            <h2 className={styles.heroText} id="heroText">Playlists Made Easy.</h2>
            <form className={styles.form} action="#" id="search">
                <input className={styles.searchBar} type="text" id="searchBar" placeholder="Song Title" />
                <button className={styles.searchButton} id="searchButton">Search Songs</button>
            </form>
        </div>
    )
}


export default SearchBar;