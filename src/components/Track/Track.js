import React from "react";
import styles from './Track.module.css';


function Track() {
    return (
        <div className={styles.trackContainer}>
            <div className="left">
                <p className={styles.title}>Tale of 2 Citiez</p>
                <p className={styles.artist}>J. Cole</p>
            </div>
            <div className="right">
                <button className={styles.button}>+</button>
            </div>
        </div>
    )
}


export default Track;