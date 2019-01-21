import React from 'react';
import s from './Cart.module.css';

const Cart = ({
    products = [],
    removeFromCart,
    incrementProductAmount,
    decrementProductAmount,
}) =>
    products.length > 0 ? (
        <table className={s.table}>
            <tbody>
                {products.map(({ id, name, amount }) => (
                    <tr key={id}>
                        <td>{name}</td>
                        <td>
                            <button
                                onClick={() => {
                                    incrementProductAmount(id);
                                }}
                            >
                                +
                            </button>
                            {amount}
                            <button
                                onClick={() => {
                                    decrementProductAmount(id);
                                }}
                            >
                                -
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => {
                                    removeFromCart(id);
                                }}
                            >
                                Удалить
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <h1>В корзине нет товаров!</h1>
    );

export default Cart;
