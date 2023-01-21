import { get } from 'mongoose'
import Movie from '../../models/movie'
//import User from '../../models/User'
const Query= {
    ping(){
        return 'pong'
    },
    async getMovies(){
        const Movies= await Movie.find()
        return Movies
    }/* ,
    async getMoviesById(_,{_id}){
        const Movies = await Movie.findById(_id)
        return Movies
    }, */

  /*   async login( _, { email, password } ) {
        const verifyUser = await User.find( { email: email, password: password } );
        console.log(verifyUser)
        return verifyUser
    }
 */

}
export default Query