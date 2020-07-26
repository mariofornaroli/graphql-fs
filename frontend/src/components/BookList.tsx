import React from 'react';
import { BookListModel } from './../models/book-list';
import Book from './Book';
import { BookModel } from '../models/book';
import { graphql } from 'react-apollo';
import { getBooksQuery } from './../queries/queries';

interface PropsFromState {
    data: BookListModel
}
interface PropsFromDispatch {
}
type AllProps = PropsFromState & PropsFromDispatch;


const BookList = (props: any) => {
    // console.log(props)
    const { data } = props;
    const { books }: BookListModel = data;
    return (
        <div>
            <ul>
                {
                    (data && data.loading) ? <div>Loading...</div> :
                        (data && books.map((b: BookModel) =>
                            (<Book book={b} key={b.id} />)
                        ))
                }
            </ul>

        </div>
    )
}

export default graphql(getBooksQuery)(BookList);
