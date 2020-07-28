import React from 'react';
import { BookListModel } from '../models/book-list';
import { BookModel } from '../models/book';
import styled from 'styled-components';

const BookDetailsContainer = styled.div`
    position: fixed;
    top     : 50px;
    right   : 0;
    height  : 100%;
    width   : 40%;
`;

interface PropsFromState {
    book?: BookModel
}
const BookDetails = (props: PropsFromState) => {
    const { book } = props;

    return (
        <BookDetailsContainer>
            <p>Name: <span className="details-item-valie">{book?.name}</span></p>
            <p>Genre: <span className="details-item-valie">{book?.genre}</span></p>
            <p>Author: <span className="details-item-valie">{book?.author?.name}</span></p>
        </BookDetailsContainer>
    )
}
export default BookDetails
