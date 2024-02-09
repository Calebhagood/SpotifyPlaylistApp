import React from "react";
import styles from './Track.module.css';


function Track(props) {
    //function that returns a button with a - if isRemoval is true and a + if isRemoval is false
    const renderButtons = () => {
        if (props.isRemoval){
            return <button className={styles.button} onClick={passTrackToRemove}>-</button>
        } else {
            return <button className={styles.button} onClick={passTrack}>+</button>
        }
    }

    const passTrack = () => {
        props.onAdd(props.track)
    }

    const passTrackToRemove = () => {
        props.onRemove(props.track)
    }

    return (
        <div className={styles.trackContainer}>
            <div className="left">
                <p className={styles.title}>{props.track.name}</p>
                <p className={styles.artist}>{props.track.artist}</p>
                <p className={styles.album}>{props.track.album}</p>
            </div>
            <div className={styles.right}>
                {/* calls render buttons function to display buttons as + or - */}
                {renderButtons()}
            </div>
        </div>
    )
}


export default Track;