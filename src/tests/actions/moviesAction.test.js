import * as moviesActions from "../../actions/moviesAction"
import * as actionsType from "../../actions/type"



test("When send a text for a search input should store text to search about movies",()=>{
    const action=moviesActions.searchMovie("Batman")
    expect(action).toEqual({
        type:actionsType.SEARCH_MOVIE,
        payload:"Batman"
    })
})



test("When search toggle displaying a loading ",()=>{
    const action=moviesActions.setLoading()
    expect(action).toEqual({
        type:actionsType.LOADING,
        
    })
})
















test("When a fetch all movies",()=>{
    const mock=jest.fn()
    let result =mock("Testing")
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("Testing");
    
})