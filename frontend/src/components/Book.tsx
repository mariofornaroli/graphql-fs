import React from 'react';
import { BookModel } from '../models/book';

interface PropsFromState {
    book: BookModel,
    setSelectedBook: any 
}
const Book = (props: PropsFromState) => {
    const { book } = props;

    return (<li onClick={() => props.setSelectedBook(book)}>{book.name}</li>)
}
export default Book
