import {IErrorMessagesState, initialErrorMessageState} from './errors.state'
import {IBlogsState, initialIBlogsState} from './blogs.state'
import {ICommentsState, initialCommentsState} from './comments.state'
import {ILoggedInState, initialLoggedInState} from './loggedIn.state'
import {INewBlogsState,initialINewBlogsState} from './newBlog.state'
import { INewCommentsState, initialINewCommentsState } from './newComment.state'

export interface IAppState {
    errors: IErrorMessagesState,
    blogs: IBlogsState,
    comments: ICommentsState,
    loggedIn: ILoggedInState,
    newBlogs: INewBlogsState,
    newComments: INewCommentsState
}

export const InitialAppState: IAppState = {
    errors: initialErrorMessageState,
    blogs: initialIBlogsState,
    comments: initialCommentsState,
    loggedIn: initialLoggedInState,
    newBlogs: initialINewBlogsState,
    newComments: initialINewCommentsState
}