import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rect-my-burger-5790c.firebaseio.com/'
});

export default instance;