var BASE_URL = 'http://localhost:3001/';

module.exports = {
  LOGIN_URL: BASE_URL + 'authorize?',
  REDIRECT_URL: BASE_URL + 'callback',
  SPOTIFY_CREDS: {
    CLIENT_ID: '3317aaef5f834d229aeaba056f8c8ea4',
    CLIENT_SECRET: '86a19ccc1fc94575bee3cd06ba8bc5aa',
    SCOPE: 'playlist-read-private'
  } 
}