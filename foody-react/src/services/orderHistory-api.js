import axios from 'axios';

const BASE_URL = 'http://localhost:3004/order-history';

const getOrderHistory = () =>
  axios.get(BASE_URL).then(responce => responce.data);

const getOrderHistoryById = id =>
  axios.get(`${BASE_URL}/${id}`).then(responce => responce.data);

const deleteOrder = id =>
  axios.delete(`${BASE_URL}/${id}`).then(responce => responce.status === 200);

export { getOrderHistory, getOrderHistoryById, deleteOrder };
