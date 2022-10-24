import axios from "axios";
import {TESTE_KEY} from '@env';

const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'content-type':'application/json;charset=utf-8',
        'Authorization':TESTE_KEY,
    }
});

export default Api;