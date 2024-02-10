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

    const truncate = (input, num) => {
        return input.substring(0, num) + '...';
    }

    return (
        <div className={styles.trackContainer}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={props.track.image} alt="Track cover art" />
                </div>
                <div className={styles.leftContent}>
                    <p className={styles.title}>{props.track.name.length > 20 ? truncate(props.track.name, 20) : props.track.name}</p>
                    <p className={styles.artist}>{props.track.artist}</p>
                    <p className={styles.album}>{props.track.album.length > 30 ? truncate(props.track.album, 30) : props.track.album}</p>
                </div>
            </div>
            <div className={styles.right}>
                {/* calls render buttons function to display buttons as + or - */}
                {renderButtons()}
            </div>
        </div>
    )
}


export default Track;