import axios from  'axios';

const instance = axios.create({
    baseURL: 'https://react-app-burger-1ee32.firebaseio.com/'
});

export default instance;