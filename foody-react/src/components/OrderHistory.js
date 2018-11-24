import React from 'react';
import Order from './Order';
import history from '../order-history.json';

const OrderHistory = () => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Delivery Adress</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      {history.map(({ id, date, price, address, rating }) => (
        <Order
          key={id}
          date={date}
          price={price}
          address={address}
          rating={rating}
        />
      ))}
    </tbody>
  </table>
);

export default OrderHistory;
