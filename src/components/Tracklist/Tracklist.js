import React from "react";
import Track from "../Track/Track";
import styles from './Tracklist.module.css';


function Tracklist() {
    return (
        <div className={styles.tracklist} id="tracklist">
            <div className="track">
                <Track />
            </div>
            <div className="track">
                <Track />
            </div>
            <div className="track">
                <Track />
            </div>
            <div className="track">
                <Track />
            </div>
            <div className="track">
                <Track />
            </div>
            <div className="track">
                <Track />
            </div>
            <div className="track">
                <Track />
            </div>
            <div className="track">
                <Track />
            </div>
        </div>


       
    )
}


export default Tracklist;
