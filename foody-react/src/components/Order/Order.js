import React from 'react';

const Order = ({ id, date, price, address, rating, onShowMore, onDelete }) => (
  <tr key={id}>
    <td>{date}</td>
    <td>{price}</td>
    <td>{address}</td>
    <td>{rating}</td>
    <td>
      <button type="button" onClick={onShowMore}>
        More...
      </button>
    </td>
    <td>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </td>
  </tr>
);

export default Order;
