import express from "express";
import  connect  from "./database"
import { graphqlHTTP } from "express-graphql";
import schema from './schema'


const app = express();
connect();

app.use( '/graphql-playground', graphqlHTTP( {
  schema: schema,
  graphiql : true
}))

app.get('/api/welcome', (req, res) => {
    res.send('hello world')
  })


app.listen( '3000', () => {
    console.log('running..')
})

