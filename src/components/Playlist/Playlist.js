import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from './Playlist.module.css';


function Playlist(){
    return (
        <div className={styles.playlistContainer}>
            <h3 className={styles.playlistHeader}>Playlist</h3>
            <div className={styles.tracklist} id="playlistSongs">
                <Tracklist />
            </div>
            <div className={styles.buttonContainer} id="saveToSpotify">
                <button className={styles.button} id="saveToSpotifyBtn">Save to Spotify</button>
            </div>
        </div>
    )
}


export default Playlist;