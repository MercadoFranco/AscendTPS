import axios from 'axios';


const get = (url = '', headers = {}) => axios.get( url, {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
    }
});

const httpClient = {
    get
};

export default httpClient;