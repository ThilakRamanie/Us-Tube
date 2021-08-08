import axios from 'axios';

const key = 'AIzaSyAzXhKTeaYCXRDAUvbAZZYwf1gsJkJx7IY';

export default axios.create({
 baseURL:'https://www.googleapis.com/youtube/v3',
 params : {
    part:'snippet',
    maxResults:5,
    key:key,
    type:'video'
 },
});