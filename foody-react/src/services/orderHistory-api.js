import axios from 'axios';

const BASE_URL = 'http://localhost:3004/order-history';

const getOrderHistory = () =>
  axios.get(BASE_URL).then(response => response.data);

const getOrderHistoryById = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => response.data);

const deleteOrder = id =>
  axios.delete(`${BASE_URL}/${id}`).then(response => response.status === 200);

const addNewOrder = order =>
  axios.post(BASE_URL, order).then(response => response.data);

export { getOrderHistory, getOrderHistoryById, deleteOrder, addNewOrder };
