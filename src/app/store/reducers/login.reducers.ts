/**Reduce for the loggedIn state*/
import {initialLoggedInState, ILoggedInState} from '../state/loggedIn.state';
import {AuthActions, ELoginActions} from '../actions/loggedIn.actions';

/**
 * @param state
 * @param {AuthActions} action
*/

export function loginReducer(state=initialLoggedInState, action: AuthActions):ILoggedInState{
    switch(action.type){
        /**For successful login*/
        case ELoginActions.LoginSuccess:
            /**Toggle the loggedIn to true*/
            return{
                ...state,
                loggedIn: true
            }
        /**For successful logout*/
        case ELoginActions.LogoutSuccess:
            /**Toggle the loggedIn to false*/
            return {
                ...state,
                loggedIn: false
            }
        /**The initial state of loggedIn*/
        default :
            return state
    }
}