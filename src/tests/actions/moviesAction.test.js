import {searchMovie} from "../../actions/moviesAction"
import {SEARCH_MOVIE} from "../../actions/type"



test("When search abour one movie",()=>{
    
    const action=searchMovie("Batman")
    expect(action(dispatch)).toEqual({
        type:SEARCH_MOVIE,
        payload:"Batman"
    })
})