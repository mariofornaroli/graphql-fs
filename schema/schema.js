const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLSchema, GraphQLInt, GraphQLList,
    GraphQLNonNull } = graphql;
//models
const Book = require('./../schema/models/book')
const Author = require('./../schema/models/author')

// const books = [
//     { id: '0', name: 'book 0', genre: 'genre 0', authorId: '0' },
//     { id: '1', name: 'book 1', genre: 'genre 1', authorId: '1' },
//     { id: '2', name: 'book 1a', genre: 'genre 1a', authorId: '1' },
//     { id: '3', name: 'book 2', genre: 'genre 2', authorId: '2' },
//     { id: '4', name: 'book 2a', genre: 'genre 2a', authorId: '2' },
//     { id: '5', name: 'book 2b', genre: 'genre 2b', authorId: '2' },
// ];

// const authors = [
//     { id: '0', name: 'author 0', age: 55 },
//     { id: '1', name: 'author 1', age: 45 },
//     { id: '2', name: 'author 2', age: 62 }
// ];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                // return authors.find(a => a.id === parent.authorId);
                return Author.findById(parent.authorId);
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({ authorId: parent.id })
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                // get book by id
                return Book.findById(args.id);
                // return books.find(b => b.id === args.id)

            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                // get book by id
                return Author.findById(args.id);
                // return authors.find(b => b.id === args.id)
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({});
                // return books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return Author.find({});
                // return authors;
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                return author.save();
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });
                return book.save();
            }
        }
    }

})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})