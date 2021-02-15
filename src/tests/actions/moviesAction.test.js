import * as moviesActions from "../../actions/moviesAction"
import * as actionsType from "../../actions/type"
import configureStore from 'redux-mock-store';
import moxios from "moxios"
import thunk from "redux-thunk"


const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

describe("movies Actions",()=>{
    beforeEach(()=>{
        moxios.install()
    })
    afterEach(()=>{
        moxios.uninstall()
    })

    test("Sholud despatch FectchMovies and Loading actions",()=>{
        moxios.wait(()=>{
            let req=moxios.requests.mostRecent()
            req.respondWith({
                code:200,
                payload:[]
            })
        })
        let expectedActionsType=[actionsType.FETCH_MOVIES,actionsType.LOADING]
        let store =mockStore({})

        return store.dispatch(moviesActions.fetchMovies())
        .then(()=>{
            let dispatchedAction=store.getActions()
            let dispatchedType=dispatchedAction.map(action=>action.type)
            expect(dispatchedType).toEqual(expectedActionsType)
        })

    })

})















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

