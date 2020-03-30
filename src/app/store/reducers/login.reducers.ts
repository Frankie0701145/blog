import {initialLoggedInState, ILoggedInState} from '../state/loggedIn.state';
import {AuthActions, ELoginActions} from '../actions/loggedIn.actions';

export const loginReducer = (
    state=initialLoggedInState, 
    action: AuthActions
):ILoggedInState=>{
    switch(action.type){
        case ELoginActions.LoginSuccess:
            return{
                ...state,
                loggedIn: true
            }
        case ELoginActions.LogoutSuccess:
            return {
                ...state,
                loggedIn: false
            }
        default :
            return state
    }
}