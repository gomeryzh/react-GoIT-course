import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Title from './Pages/Title';
import Nav from './Pages/Nav';
import HomePage from './Pages/HomePage';
import ArticlesPage from './Pages/ArticlesPage';
import ArticlePage from './Pages/ArticlePage';
import AboutPage from './Pages/AboutPage';
import NotFound from './Pages/404Page';

const App = () => (
  <>
    <Title text="React Router Basics" />
    <Nav />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/articles" component={ArticlesPage} />
      <Route path="/articles/:id" component={ArticlePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
