import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
{
    authors {
        name
        age
        id
    }
}
`;

const getBooksQuery = gql`
{
    books {
        name
        genre
        id
        author {
            name
            age
        }
    }
}
`;

const addBookMutation = gql`
    mutation ($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            genre
            id
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation }

