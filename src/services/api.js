import axios from 'axios';
import { API_BASE_URL, ENDPOINTS } from '../utils/constants';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchRestaurantList = () => api.get(ENDPOINTS.RESTAURANTS);
export const fetchRestaurantById = (id) => api.get(`${ENDPOINTS.RESTAURANTS}/${id}`);
export const searchRestaurant = (query) => api.get(`${ENDPOINTS.RESTAURANTS}?q=${query}`);
export const filterRestaurant = (filters) => api.post(`${ENDPOINTS.RESTAURANTS}/filter`, filters);
