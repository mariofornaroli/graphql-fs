import React from 'react';
import { BookModel } from '../models/book';
import styled from 'styled-components';

const BookListItem = styled.li`
display: inline - block;
padding: 6px 16px;
margin: 8px 16px;
font - size    : 1.2em;
border: 2px solid currentColor;
border - radius: 5px;
cursor: pointer;
`;

interface PropsFromState {
    book: BookModel,
    setSelectedBook: any
}
const Book = (props: PropsFromState) => {
    const { book } = props;

    return (<BookListItem onClick={() => props.setSelectedBook(book)}>{book.name}</BookListItem>)
}
export default Book
