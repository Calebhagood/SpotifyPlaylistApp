import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


function App(){
    return (
            <div>
                <div id="header">
                    <h1 id="headerText">JAMMMING</h1>
                </div>
                <div id="searchBar">
                    {/*Search Bar Component here*/}
                    <SearchBar />
                </div>
                <div id="resultsSection">
                    <div id="results">
                        {/*results for trackList and tracks components here*/}
                        <SearchResults />
                    </div>
                    <div id="playlist">
                        {/*playlist component here*/}
                        <Playlist />
                    </div>
                </div>


            </div>
    )
}


export default App;
