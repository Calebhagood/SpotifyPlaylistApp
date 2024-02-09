import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from './SearchResults.module.css';


function SearchResults(props){
    

    return (
        <div className={styles.resultsContainer}>
            <h3 className={styles.resultsHeader}>Results</h3>
            <div className={styles.tracklist}>
                <Tracklist userSearchResults={props.userSearchResults} isRemoval={false} onAdd={props.onAdd} />
            </div>
        </div>
    )
}




export default SearchResults;