import React, { Component } from 'react';
import BookList from '../containers/book-list'; //eslint-disable-line import/no-named-as-default

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
