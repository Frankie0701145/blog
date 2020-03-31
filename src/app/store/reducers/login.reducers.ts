/**Reduce for the loggedIn state*/
import {initialLoggedInState, ILoggedInState} from '../state/loggedIn.state';
import {AuthActions, ELoginActions} from '../actions/loggedIn.actions';

export function loginReducer(state=initialLoggedInState, action: AuthActions):ILoggedInState{
    switch(action.type){
        /**For successful login*/
        case ELoginActions.LoginSuccess:
            return{
                ...state,
                loggedIn: true
            }
        /**For successful logout*/
        case ELoginActions.LogoutSuccess:
            return {
                ...state,
                loggedIn: false
            }
        default :
            return state
    }
}