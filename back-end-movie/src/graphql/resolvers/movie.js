import { makeExecutableSchema } from "graphql-tools";
import resolvers from '../resolvers/index'

const TypeDefs = `
    type Query {
        getMovies:[Movie!]
      getCourseById(id: ID) : Course
    }

    type Mutation {
        createMovie(input:MovieInput) : Movie
        updateMovie(input:MovieInput):Movie
        removeMovie(input:MovieInput):Movie
    }
    type Movie{
        title:String!
         descripcion:String!
         Like:String!
         img:String!
         Date_of_released:String!
        }
        input MovieInput {
   
            title:String!
           descripcion:String!
             Like:String!
            Date_of_released:String!
            img:String!
        }


`





 export default makeExecutableSchema( {
    typeDefs: TypeDefs,
    resolvers: resolvers
})
 
