/**Auth Action*/
import { Action } from '@ngrx/store';

/**
 * @enum {string}
 * The loggedIn  constant names actions 
*/
export enum ELoginActions {
    Login= '[Login] Login',
    LoginSuccess = '[Blogs] Login Success',
    Logout = '[Blogs]Logout',
    LogoutSuccess= '[Blogs] Logout Success',

}

/** 
 * @class
 * @implements {Action}
 * LoginSuccess Action
 * Toggles the loggedIn state to true
 */
export class LoginSuccess implements Action {
    /**
     *  Holds the action type constant
    */
    public readonly type = ELoginActions.LoginSuccess
    /**
     * @param {Object} payload
     * @param {string} payload.accessToken - Access token from the server
    */
    constructor(public payload: {accessToken: string}){}
}

/** 
 * @class 
 * @implements {Action}
 * Logout Success Action
 * Toggles the loggedIn state to false
*/
export class LogoutSuccess implements Action {
    /**
     *  Holds the action type constant
    */
    public readonly type = ELoginActions.LogoutSuccess
}

/** The loginAction Type*/
export type AuthActions = LoginSuccess | LogoutSuccess
