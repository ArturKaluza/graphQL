const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');
const schema = require('./schema');


app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}));


app.listen(3000, () => console.log('port 3000'));