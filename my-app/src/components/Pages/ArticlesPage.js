import React, { Component } from 'react';
import * as api from '../../api-mock/api';
import ArticleList from './ArticleList';
import CategorySelector from '../CategorySelector';
import categories from '../../api-mock/categories';
import queryString from 'query-string';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class ArticlesPage extends Component {
  state = { articles: [] };

  componentDidMount = () => {
    const category = getCategoryFromProps(this.props);

    if (!category) {
      return this.props.history.replace({
        pathname: this.props.location.pathname,
        search: 'category=all',
      });
    }

    api
      .fetchArticlesByCategory(category)
      .then(articles => this.setState({ articles }));
  };

  componentDidUpdate = prevProps => {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory === nextCategory) return;

    api
      .fetchArticlesByCategory(nextCategory)
      .then(articles => this.setState({ articles }))
      .catch(error => error);
  };

  handleOnCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  render() {
    const { articles } = this.state;
    console.log(queryString.parse(this.props.location.search));
    const currentCategory = getCategoryFromProps(this.props);
    return (
      <div>
        <h2>Artciles Page</h2>
        <CategorySelector
          options={categories}
          value={currentCategory}
          onChange={this.handleOnCategoryChange}
        />
        <ArticleList articles={articles} />
      </div>
    );
  }
}
