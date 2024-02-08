import React from "react";
import Track from "../Track/Track";
import styles from './Tracklist.module.css';


function Tracklist(props) {
    console.log(typeof props.userSearchResults);

    return (
        <div>
            <div className={styles.tracklist} id="tracklist">
                
                {/*map method that runs throught the search results array to display each track component*/}
                {props.userSearchResults ? props.userSearchResults.map((track) => (
                    <Track
                    track={track}
                    key={track.id}
                    />
                )) : console.log('error')}
            </div>
        </div>


       
    )
}


export default Tracklist;
