import React from 'react';
import { BookListModel } from '../models/book-list';
import { BookModel } from '../models/book';

interface PropsFromState {
    book?: BookModel
}
const BookDetails = (props: PropsFromState) => {
    const { book } = props;

    return (
        <div className="book-details-container">
            <p>Name: <span className="details-item-valie">{book?.name}</span></p>
            <p>Genre: <span className="details-item-valie">{book?.genre}</span></p>
            <p>Author: <span className="details-item-valie">{book?.author?.name}</span></p>
        </div>
    )
}
export default BookDetails
