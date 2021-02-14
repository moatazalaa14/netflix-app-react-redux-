import {movieReducer,initialState} from "../../Reducers/moviesReducer"
import * as actionsType from "../../actions/type"


test("when action is not found in reducer ",()=>{
    const action={type:"unKnown"}
    let newState=movieReducer(undefined,action)
    expect(newState).toEqual(initialState)
})


test("when actions is a search about movie",()=>{
    const action={type:actionsType.SEARCH_MOVIE , payload:"Batman"}
    let newState=movieReducer(undefined,action)
    expect(newState).toEqual({
        ...newState,
        text:"Batman",
        loading:false
    })
})


test("Should be loading is a true",()=>{
    const action={type:actionsType.LOADING}
    let newState=movieReducer(undefined,action)
    expect(newState).toEqual({
        ...initialState,
        loading:true
    })
})