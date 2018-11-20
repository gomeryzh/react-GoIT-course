import React from 'react';

const OrderHistory = ({ date, price, deliveryAdress, rating }) => (
  <table>
    <tr>
      <th>Date</th>
      <th>Price</th>
      <th>Delivery Adress</th>
      <th>Rating</th>
    </tr>
    <tr>
      <td>{date}</td>
      <td>{price}</td>
      <td>{deliveryAdress}</td>
      <td>{rating}</td>
    </tr>
  </table>
);

export default OrderHistory;
