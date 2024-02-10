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
    const [searchInput, setSearchInput] = useState('');
    const [accessToken, setAccessToken] = useState('');

    const clientID = 'c032555bf9bd44b48770bd4427d3207f';
    const clientSecret = 'c548a428894448d5beee0c6b1f9b2f2e'
    useEffect(() => {
        const authParameters ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}`
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    }, []);

    async function search() {
        console.log(`Search for ${searchInput}`)
        const searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
        }
        const trackSearch = await fetch(`https://api.spotify.com/v1/search?type=track&limit=50&market=US&q=${searchInput}`, searchParameters )
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSearchResults(data.tracks.items.map(t => ({
                    id: t.id,
                    name: t.name,
                    artist: t.artists[0].name,
                    album: t.album.name,
                    image: t.album.images[0].url,
                    'preview_url': t.preview_url,
                    uri: t.uri,
                })))
            })
        console.log(trackSearch)
    }

    
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

    // function search(term) {
    //     Spotify.search(term).then((result) => setSearchResults(result));
    //     console.log(term);
    // }

    return (
            <div className={styles.container}>
                <div className={styles.overlay}>
                    <div className={styles.header} id="header">
                        <h1 id="headerText">JA<span className={styles.purpleLetters}>MMM</span>ING</h1>
                    </div>
                    <div id="searchBar">
                        {/*Search Bar Component here*/}
                        <SearchBar 
                            onSearch={search} 
                            // onKeyDown={event => {
                            //     if (event.key == "Enter"){
                            //         search();
                            //     }
                            // }}
                            onChange={event => setSearchInput(event.target.value)}
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

