import React, {useState} from "react";
import styles from './SearchBar.module.css'

function SearchBar(props){
    const [term, setTerm] = useState('');

    const passTerm = () => {
        props.onSearch(term);
    }

    const handleTermChange = ({target}) => {
        setTerm(target.value);
    }

    return (
        <div className={styles.div}>
            <h2 className={styles.heroText} id="heroText">Playlists Made Easy.</h2>
            {/* <form className={styles.form} action="#" id="search"  onChange={props.onChange} onSubmit={(e) => e.preventDefault()}> */}
                <div className={styles.form}>
                    <input className={styles.searchBar} type="text" id="searchBar" placeholder="Song Title/Artist/Album" onChange={handleTermChange} />
                    <button className={styles.searchButton} id="searchButton" onClick={passTerm} >Search Songs</button>
                </div>
            {/* </form> */}
        </div>
    )
}


export default SearchBar;