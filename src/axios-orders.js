import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-92a8b.firebaseio.com/'
});

export default instance;
