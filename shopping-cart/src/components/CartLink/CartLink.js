import React from 'react';
import { Link } from 'react-router-dom';
import * as s from './CartLink.module.css';

const CartLink = ({ amount }) => (
    <Link to="/cart">
        <div className={s.container}>
            <img
                src="https://image.flaticon.com/icons/svg/1420/1420798.svg"
                width="60"
                alt=""
            />
            <span className={s.amount}>{amount}</span>
        </div>
    </Link>
);

export default CartLink;
