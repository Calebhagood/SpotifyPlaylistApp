import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';


function App(){
    //stateful variables for search results
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
            id: 6,
        },
    ] );
    //stateful variables for playlist names and tracks
    const [playlistName, setPlaylistName] = useState('Example Playlist 1')
    const [playlistTracks, setPlaylistTracks] = useState([
        {
            name: 'Example Playlist',
            artist: 'Example Playlist Artist',
            album: 'Example Playlist Album',
            id: 7,
        },
        {
            name: 'Example Playlist',
            artist: 'Example Playlist Artist',
            album: 'Example Playlist Album',
            id: 8,
        },
        {
            name: 'Example Playlist',
            artist: 'Example Playlist Artist',
            album: 'Example Playlist Album',
            id: 9,
        },
    ])
    //method that adds tracks to playlist
    const addTrack = (track) => {
        const existingTrack = playlistTracks.find((t) => t.id === track.id);
        const newTrack = playlistTracks.concat(track); 

        //if statement to determine whether existing tracks is true, if not track will be added
        if (existingTrack){
            console.log('track already exists in playlist');
        } else {
            setPlaylistTracks(newTrack);
        }
    }

    const removeTrack = (track) => {
        const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
        setPlaylistTracks(existingTrack)
    }

    const updatePlaylistName = (name) => {
        setPlaylistName(name);
    }

    const savePlaylist = () => {
        const trackURIs = playlistTracks.map((t) => t.uri)
    }

    const search = (arg) => {
        console.log(arg);
    }

    return (
            <div className={styles.container}>
                <div className={styles.overlay}>
                    <div className={styles.header} id="header">
                        <h1 id="headerText">JA<span className={styles.purpleLetters}>MMM</span>ING</h1>
                    </div>
                    <div id="searchBar">
                        {/*Search Bar Component here*/}
                        <SearchBar onSearch={search} />
                    </div>
                    <div className={styles.resultsSection} id="resultsSection">
                        <div id="results">
                            {/*results for trackList and tracks components here*/}
                            <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
                        </div>
                        <div id="playlist">
                            {/*playlist component here*/}
                            <Playlist 
                                playlistName={playlistName} 
                                playlistTracks={playlistTracks} 
                                onRemove={removeTrack} 
                                onChange={updatePlaylistName} 
                                onSave={savePlaylist} 
                            />
                        </div>
                    </div>
                </div>


            </div>
    )
}


export default App;

