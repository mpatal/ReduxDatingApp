import React, { Component } from 'react';
import { connect } from 'react-redux'; //eslint-disable-line import/no-named-as-default

export class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => { //eslint-disable-line react/prop-types
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}


function mapStateToProps(state) {
    return {
        books : state.books
    };
}

export default connect(mapStateToProps)(BookList);