import axios from  'axios';

const KEY = 'AIzaSyBMihpxuI3zfhc8oCWDfsTFefxvCYylc7s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY 
    }
});