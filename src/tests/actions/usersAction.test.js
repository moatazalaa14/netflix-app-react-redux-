import * as usersActions from "../../actions/usersAction"
import * as actionsType from "../../actions/type"




test("when user log in ",()=>{
    const info={
        username:"moataz_alaa",
        password:"moataz12"
    }
    const action=usersActions.userLogin(info)
    expect(action).toEqual({
        type:actionsType.LOG_IN_USER,
        payload:info
    })
})