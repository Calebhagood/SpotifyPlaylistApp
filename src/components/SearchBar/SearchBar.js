import React, {useState} from "react";
import styles from './SearchBar.module.css'

function SearchBar(props){
    const [arg, setArg] = useState('');

    const passArg = () => {
        props.onSearch(arg);
    }

    const handleArgChange = ({target}) => {
        setArg(target.value);
    }

    return (
        <div className={styles.div}>
            <h2 className={styles.heroText} id="heroText">Playlists Made Easy.</h2>
            <form className={styles.form} action="#" id="search">
                <input className={styles.searchBar} type="text" id="searchBar" placeholder="Song Title/Artist/Album" onChange={handleArgChange} />
                <button className={styles.searchButton} id="searchButton" onClick={passArg} >Search Songs</button>
            </form>
        </div>
    )
}


export default SearchBar;