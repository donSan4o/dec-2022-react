import axios from 'axios';
import { carsAPI, jsonPlaceholderAPI } from '../constants';

const placeholderAPIService = axios.create({ baseURL: jsonPlaceholderAPI });
const carsAPIService = axios.create({ baseURL: carsAPI });

export {
    placeholderAPIService,
    carsAPIService
}