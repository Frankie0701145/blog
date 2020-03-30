import { Action } from '@ngrx/store';


export enum ELoginActions {
    Login= '[Login] Login',
    LoginSuccess = '[Blogs] Login Success',
    Logout = '[Blogs]Logout',
    LogoutSuccess= '[Blogs] Logout Success',

}

export class LoginSuccess implements Action {
    public readonly type = ELoginActions.LoginSuccess
    constructor(public payload: {accessToken: string}){}
}

export class LogoutSuccess implements Action {
    public readonly type = ELoginActions.LogoutSuccess
}

export type AuthActions = LoginSuccess | LogoutSuccess
