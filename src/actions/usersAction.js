
import store from "../store"
export const userLogin=info=>{
   return store.dispatch({
        type:"LOG_IN_USER",
        payload:info
    })
}