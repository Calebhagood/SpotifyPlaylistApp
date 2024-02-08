import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';


function App(){
    return (
            <div className={styles.container}>
                <div className={styles.overlay}>
                    <div className={styles.header} id="header">
                        <h1 id="headerText">JA<span className={styles.purpleLetters}>MMM</span>ING</h1>
                    </div>
                    <div id="searchBar">
                        {/*Search Bar Component here*/}
                        <SearchBar />
                    </div>
                    <div className={styles.resultsSection} id="resultsSection">
                        <div id="results">
                            {/*results for trackList and tracks components here*/}
                            <SearchResults />
                        </div>
                        <div id="playlist">
                            {/*playlist component here*/}
                            <Playlist />
                        </div>
                    </div>
                </div>


            </div>
    )
}


export default App;
