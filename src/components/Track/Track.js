import React from "react";
import styles from './Track.module.css';


function Track(props) {
    return (
        <div className={styles.trackContainer}>
            <div className="left">
                <p className={styles.title}>{props.track.name}</p>
                <p className={styles.artist}>{props.track.artist}</p>
                <p className={styles.album}>{props.track.album}</p>
            </div>
            <div className={styles.right}>
                <button className={styles.button}>+</button>
            </div>
        </div>
    )
}


export default Track;