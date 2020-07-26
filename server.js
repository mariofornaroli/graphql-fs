const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin request
app.use(cors());

// connect to db
mongoose.connect('mongodb://localhost:27017/grqphql-fs');
mongoose.connection.once('open', () => {
    console.log('connected to db');
})

// declare graphql root and apecify graphql schema
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen('4000', () => {
    console.log('graphQL-fs server started on port 4000')
})