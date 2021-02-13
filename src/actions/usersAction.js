

export const userLogin=info=>dispatch=>{
    dispatch({
        type:"LOG_IN_USER",
        payload:info
    })
}