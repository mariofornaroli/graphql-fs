import React from 'react';
import { BookListModel } from '../models/book-list';
import { BookModel } from '../models/book';

interface PropsFromState {
    book: BookModel
}
const Book = (props: PropsFromState) => {
    const { book } = props;

    return (<li>{book.name}</li>)
}
export default Book
