import movie from "../../models/movie.js";
const Mutation ={
    async createMovie(_, {input}){
        const movies= await movie.create(input)
        return movies
    },
       async updateMovie(_,{input, id}){
            return await movie.findByIdAndUpdate(
                id,
                input,
                {new:true}
            )
        },
        async removeMovie(_,{id}){
          await movie.findByIdAndRemove(id)
            return await movie.find()
        } 
    
}
export default Mutation
