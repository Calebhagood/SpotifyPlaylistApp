import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from './Playlist.module.css';


function Playlist(props){
    const handleNameChange = ({target}) => {
        props.onChange(target.value);
    }

    return (
        <div className={styles.playlistContainer}>
            
            <input className={styles.playlistName} placeholder="Playlist Name" onChange={handleNameChange} required/>
            
            <div className={styles.tracklist} id="playlistSongs">
                <Tracklist userSearchResults={props.playlistTracks} isRemoval={true} onRemove={props.onRemove}/>
            </div>
            <div className={styles.buttonContainer} id="saveToSpotify">
                <button className={styles.button} id="saveToSpotifyBtn" onClick={props.onSave} >Save to Spotify</button>
            </div>
        </div>
    )
}


export default Playlist;