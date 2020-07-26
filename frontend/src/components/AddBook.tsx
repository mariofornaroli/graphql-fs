import React from 'react';
import { BookListModel } from '../models/book-list';
import { BookModel } from '../models/book';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gql`
{
    authors {
        name
        id
    }
}
`

const AddBook = (props: any) => {

    return (
        <form className="book-addition">

            <div className="field">
                <label htmlFor="bookName">Book name</label>
                <input type="text" id="bookName" />
            </div>

            <div className="field">
                <label htmlFor="bookGenre">Genre</label>
                <input type="text" id="bookGenre" />
            </div>

            <div className="field">
                <label htmlFor="bookAuthor">Author</label>
                <select name="bookAuthor" id="bookAuthor">
                    <option value="aa">bb</option>
                </select>
            </div>

            <button>Add</button>


        </form>
    )
}
export default graphql(getAuthorsQuery) (AddBook);
