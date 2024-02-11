import React, {useState, useEffect} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';
import {Spotify} from '../../util/Spotify/Spotify';


function App(){
    //stateful variables for search results
    const [searchResults, setSearchResults] = useState([]);
    //stateful variables for playlist names and tracks
    const [playlistName, setPlaylistName] = useState('Example Playlist 1')
    const [playlistTracks, setPlaylistTracks] = useState([
        // {
        //     name: 'Example Playlist',
        //     artist: 'Example Playlist Artist',
        //     album: 'Example Playlist Album',
        //     id: 7,
        // },
        // {
        //     name: 'Example Playlist',
        //     artist: 'Example Playlist Artist',
        //     album: 'Example Playlist Album',
        //     id: 8,
        // },
        // {
        //     name: 'Example Playlist',
        //     artist: 'Example Playlist Artist',
        //     album: 'Example Playlist Album',
        //     id: 9,
        // },

    
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
        const trackURIs = playlistTracks.map((t) => t.uri);
        Spotify.savePlaylist(playlistName, trackURIs).then(() => {
            setPlaylistName('New Playlist');
            setPlaylistTracks([]);
        })
    }

    function search(arg) {
        Spotify.search(arg).then((result) => setSearchResults(result));
        console.log(arg);
    }


    return (
            <div className={styles.container}>
                <div className={styles.overlay}>
                    <div className={styles.header} id="header">
                        <h1 id="headerText">JA<span className={styles.purpleLetters}>MMM</span>ING</h1>
                    </div>
                    <div id="searchBar">
                        {/* <button id='login' onClick={login}>Login</button> */}
                        {/*Search Bar Component here*/}
                        <SearchBar 
                            onSearch={search} 
                            // onChange={event => setSearchInput(event.target.value)}
                            
                        />
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

