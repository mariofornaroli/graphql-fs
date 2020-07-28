import React, { useState } from 'react';
import { BookListModel } from '../models/book-list';
import Book from './Book';
import { BookModel } from '../models/book';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const BookListContainer = styled.div`
    width      : 60%;
    padding-top: 180px;
`;

const BookListUl = styled.ul`
    list-style: none;
`;

const BookList = (props: any) => {
    const { data } = props;
    const { books }: BookListModel = data;
    const [selectedBook, setSelectedBook] = useState(undefined);

    return (
        <>
            <Title>Testing GraphQl</Title>
            <BookListContainer>
                <BookListUl>
                    {
                        (data && data.loading) ? <div>Loading...</div> :
                            (data && books.map((b: BookModel) =>
                                (<Book book={b} key={b.id} setSelectedBook={setSelectedBook} />)
                            ))
                    }
                </BookListUl>

            </BookListContainer>
            {selectedBook && <BookDetails book={selectedBook} />}
        </>
    )
}

export default graphql(getBooksQuery)(BookList);
