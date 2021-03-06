import React, { useState } from 'react';
import { BookListModel } from '../models/book-list';
import { BookModel } from '../models/book';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { AuthorModel } from '../models/author';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from './../queries/queries';
import styled from 'styled-components';

const AddBookContainer = styled.div`
    position       : fixed;
    top            : 50px;
    left           : 0;
    width          : 60%;
    height         : 180px;
    display        : flex;
    flex-direction : column;
    justify-content: center;
    align-items    : center;
    `

const AddBook = (props: any) => {
    const [book, setBook] = useState(new BookModel());

    console.log(props)

    const changeFormValue = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        let _book: any = Object.assign({}, book);
        _book[name] = value;
        setBook(_book);
    }

    const getAuthorsOptions = () => {
        const data = props.getAuthorsQuery;
        if (data) {
            return data.loading ?
                <option>Loading authors...</option> :
                data.authors.map((a: AuthorModel) =>
                    (<option value={a.id} key={a.id}>{a.name}</option>))
        }
    }

    const executeAddBook = (e: any) => {
        e.preventDefault();
        let _authorId = book.authorId;
        if (!_authorId) {
            const data = props.getAuthorsQuery;
            if (data.authors) {
                _authorId = data.authors[0].id;
            }
        }
        props.addBookMutation({
            variables: {
                name: book.name,
                genre: book.genre,
                authorId: _authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }

    return (
        <AddBookContainer>
            <form className="book-addition" onSubmit={executeAddBook}>

                <div className="field">
                    <label htmlFor="bookName">Book name</label>
                    <input type="text" name="name" id="bookName" onChange={changeFormValue} />
                </div>

                <div className="field">
                    <label htmlFor="bookGenre">Genre</label>
                    <input type="text" name="genre" id="bookGenre" onChange={changeFormValue} />
                </div>

                <div className="field">
                    <label htmlFor="bookAuthor">Author</label>
                    <select name="authorId" id="bookAuthor" onChange={changeFormValue}>
                        {getAuthorsOptions()}
                    </select>
                </div>

                <button>Add</button>

            </form>
        </AddBookContainer>
    )
}
export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
