import { IPersonnelState, initialPersonnel } from './personnel.state';
import {IErrorMessagesState, initialErrorMessageState} from './errors.state'
import {IBlogsState, initialIBlogsState} from './blogs.state'
import {ICommentsState, initialCommentsState} from './comments.state'
import {ISuccessMessagesState, initialSuccessMessagesState} from './successMessages.state'
import {ILoggedInState, initialLoggedInState} from './loggedIn.state'


export interface IAppState {
    errors: IErrorMessagesState,
    blogs: IBlogsState,
    comments: ICommentsState,
    loggedIn: ILoggedInState
}

export const InitialAppState: IAppState = {
    errors: initialErrorMessageState,
    blogs: initialIBlogsState,
    comments: initialCommentsState,
    loggedIn: initialLoggedInState
}