import axios from 'axios';
import config from '../config';

export default class Services {
    GetItems() {
        return axios.get(config.SERVER_URL, {
            responseType: 'json',
        });
    }
}
