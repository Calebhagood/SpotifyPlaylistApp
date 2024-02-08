import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from './SearchResults.module.css';


function SearchResults(props){
    console.log(typeof props.userSearchResults);

    return (
        <div className={styles.resultsContainer}>
            <h3 className={styles.resultsHeader}>Results</h3>
            <div className={styles.tracklist}>
                <Tracklist userSearchResults={props.userSearchResults} />
            </div>
        </div>
    )
}




export default SearchResults;