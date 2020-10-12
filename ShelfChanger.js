import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  updateShelf = (event) =>
    this.props.changeShelf(this.props.book, event.target.value);

  render() {
    const { book, books } = this.props;

    let currentShelf = 'none';

    for (const item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
        break;
      }
    }

    return (
      <div className='book-shelf-changer'>
        <select onChange={this.updateShelf} defaultValue={currentShelf}>
          <option value='none' disabled>
            Move to...
          </option>
          <option name='currentlyReading' value='currentlyReading'>Currently Reading</option>
          <option name='wantToRead' value='wantToRead'>Want to Read</option>
          <option name='read' value='read'>Read</option>
          <option name='none' value='none'>None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;