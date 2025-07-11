import axios from 'axios';

export default axios.create({
    baseURL:'https://372da417b1c1.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});