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
    // const [searchInput, setSearchInput] = useState('');
    // const [accessToken, setAccessToken] = useState('');

    // useEffect(() => {
    //     const hash = window.location.hash;
    //     if (hash) {
    //         setAccessToken(hash.substring(1).split('&')[0].split('=')[1]);
    //         console.log(accessToken);
    //     }
    // }, [])

    // console.log(accessToken);
    
    


    
    // useEffect(() => {
    //     const authParameters ={
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}`
    //     }
    //     fetch('https://accounts.spotify.com/api/token', authParameters)
    //         .then(result => result.json())
    //         .then(data => {
    //             console.log(data.access_token);
    //             setAccessToken(data.access_token)
                
    //             console.log(accessToken);
                
                
    //         })
        
    // }, []);

    // console.log(accessToken);


    // async function search() {
    //     console.log(`Search for ${searchResults}`)
    //     const searchParameters = {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${accessToken}`
    //         },
    //     }
    //     const trackSearch = await fetch(`https://api.spotify.com/v1/search?type=track&limit=50&market=US&q=${searchInput}`, searchParameters )
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setSearchResults(data.tracks.items.map(t => ({
    //                 id: t.id,
    //                 name: t.name,
    //                 artist: t.artists[0].name,
    //                 album: t.album.name,
    //                 image: t.album.images[0].url,
    //                 'preview_url': t.preview_url,
    //                 uri: t.uri,
    //             })))
    //         })
    //     console.log(trackSearch)
    // }   

    // async function savePlaylist(){
    //     let userId;
    //     console.log(accessToken)
    //     const getUserIdParameters = {

    //         headers: {
                
    //             Authorization: `Bearer ${accessToken}`
    //         }
    //     }
    //     const getUserId = await fetch(`https://api.spotify.com/v1/me`, getUserIdParameters)
    //         .then(response => response.json())
    //         .then(data => console.log(data.id));
        
    //     console.log(getUserId);
    // }

    

    
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

    function search(term) {
        Spotify.search(term).then((result) => setSearchResults(result));
        console.log(term);
    }

    function login() {
        Spotify.login();
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

