/**Auth Action*/
import { Action } from '@ngrx/store';

/**The loggedIn  constant names actions */
export enum ELoginActions {
    Login= '[Login] Login',
    LoginSuccess = '[Blogs] Login Success',
    Logout = '[Blogs]Logout',
    LogoutSuccess= '[Blogs] Logout Success',

}

/** Login Success Action*/
export class LoginSuccess implements Action {
    public readonly type = ELoginActions.LoginSuccess
    constructor(public payload: {accessToken: string}){}
}

/** Logout Success Action*/
export class LogoutSuccess implements Action {
    public readonly type = ELoginActions.LogoutSuccess
}

/** The loginAction Type*/
export type AuthActions = LoginSuccess | LogoutSuccess
