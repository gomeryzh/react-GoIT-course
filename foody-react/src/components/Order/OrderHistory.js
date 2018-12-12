import React from 'react';
import Order from './Order';

const OrderHistory = ({ history, onDelete, onShowMore }) => (
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
          onDelete={() => onDelete(id)}
          onShowMore={() => onShowMore(id)}
        />
      ))}
    </tbody>
  </table>
);

export default OrderHistory;
