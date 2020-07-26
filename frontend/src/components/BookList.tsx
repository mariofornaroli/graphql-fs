import React, { useState } from 'react';
import { BookListModel } from '../models/book-list';
import Book from './Book';
import { BookModel } from '../models/book';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';


const BookList = (props: any) => {
    const { data } = props;
    const { books }: BookListModel = data;
    const [selectedBook, setSelectedBook] = useState(undefined);

    return (
        <>
            <div>
                <ul>
                    {
                        (data && data.loading) ? <div>Loading...</div> :
                            (data && books.map((b: BookModel) =>
                                (<Book book={b} key={b.id} setSelectedBook={setSelectedBook} />)
                            ))
                    }
                </ul>

            </div>
            {selectedBook && <BookDetails book={selectedBook} />}
        </>
    )
}

export default graphql(getBooksQuery)(BookList);
