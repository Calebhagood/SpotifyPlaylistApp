let accessToken;
const clientID = "c032555bf9bd44b48770bd4427d3207f";
const redirectUrl = "http://localhost:3000";

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        if (tokenInURL && expiryTime) {
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);

            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            window.history.pushState("Access token", null, "/");
            return accessToken;
        }

        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
        window.location = redirect;
        
    },

    search(term) {
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
        window.location = redirect;
        accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: 'GET',
            headers: {Authorization: `Bearer ${accessToken}`},
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if (!jsonResponse) {
                console.log("Response error");
            }
            console.log(accessToken);
            console.log(jsonResponse);
            return jsonResponse.tracks.items.map(t => ({
                id: t.id,
                name: t.name,
                artist: t.artists[0].name,
                album: t.album.name,
                uri: t.uri,
            }))
        })
    }

};

export {Spotify};