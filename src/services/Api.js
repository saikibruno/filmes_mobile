import axios from "axios";
import {TMDB_KEY} from '@env';

const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'content-type':'application/json;charset=utf-8',
        'Authorization':TMDB_KEY,
    }
});

export default Api;