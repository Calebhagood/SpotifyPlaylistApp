import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';


function App(){

    const [searchResults, setSearchResults] = useState([
        {
            name: 'Tale of 2 Citiez',
            artist: 'J. Cole',
            album: '2014 Forest Hills Drive',
            id: 1,
        },
        {
            name: 'Wet Dreamz',
            artist: 'J. Cole',
            album: '2014 Forest Hills Drive',
            id: 2,
        },
        {
            name: 'You Broke My Heart',
            artist: 'Drake',
            album: 'Scary Hours 3',
            id: 3,
        },
        {
            name: 'Show Me Love',
            artist: 'Alicia Keys',
            album: 'ALICIA',
            id: 4,
        },
        {
            name: 'Another Heartbreak',
            artist: 'GIVEON',
            album: 'Give Or Take',
            id: 5,
        },
        {
            name: 'First Person Shooter',
            artist: 'Drake',
            album: 'For All The Dogs',
            id: 5,
        },
    ] );

    

    console.log(typeof searchResults);

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
                            <SearchResults userSearchResults={searchResults} />
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

