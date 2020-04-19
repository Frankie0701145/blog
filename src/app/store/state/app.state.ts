
import {IBlogsState, initialIBlogsState} from './blogs.state'
import {ICommentsState, initialCommentsState} from './comments.state'
import {ILoggedInState, initialLoggedInState} from './loggedIn.state'
import { INewCommentsState, initialINewCommentsState } from './newComment.state'
import { IIsSearchingState, initialIsSearchingState} from './isSearching.state'
import { IFilteredBlogsState,initialFilteredBlogsState } from './filteredBlogs.state'

export interface IAppState {
    blogs: IBlogsState,
    comments: ICommentsState,
    loggedIn: ILoggedInState,
    newComments: INewCommentsState,
    isSearching: IIsSearchingState,
    filteredBlogs: IFilteredBlogsState
}

export const InitialAppState: IAppState = {
    blogs: initialIBlogsState,
    comments: initialCommentsState,
    loggedIn: initialLoggedInState,
    newComments: initialINewCommentsState,
    isSearching: initialIsSearchingState,
    filteredBlogs: initialFilteredBlogsState
}