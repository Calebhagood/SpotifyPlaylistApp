import React from "react";


function Track() {
    return (
        <div>
            <div className="left">
                <p className="songTitle">Tale of 2 Citiez</p>
                <p className="artist">J. Cole</p>
            </div>
            <div className="right">
                <button className="addToPlaylist">+</button>
            </div>
        </div>
    )
}


export default Track;