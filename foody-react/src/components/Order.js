import React from 'react';

const Order = ({ id, date, price, address, rating }) => (
  <tr key={id}>
    <td>{date}</td>
    <td>{price}</td>
    <td>{address}</td>
    <td>{rating}</td>
  </tr>
);

export default Order;
