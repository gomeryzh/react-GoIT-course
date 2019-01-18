import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Products from '../Products/ProductsContainer';
import Cart from '../Cart/CartContainer';

import s from './App.module.css';

const App = () => (
    <main className={s.container}>
        <header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <ul>
                <li>
                    <Link to="/">Products</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </header>

        <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/cart" component={Cart} />
            <Redirect to="/" />
        </Switch>
    </main>
);

export default App;
