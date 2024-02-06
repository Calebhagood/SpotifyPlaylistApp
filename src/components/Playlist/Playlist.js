import React from "react";
import Tracklist from "../Tracklist/Tracklist";


function Playlist(){
    return (
        <div>
            <div id="playlistSongs">
                <Tracklist />
            </div>
            <div id="saveToSpotify">
                <button id="saveToSpotifyBtn">Save to Spotify</button>
            </div>
        </div>
    )
}


export default Playlist;