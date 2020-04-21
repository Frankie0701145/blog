
import {IBlogsState, initialIBlogsState} from './blogs.state'
import {ICommentsState, initialCommentsState} from './comments.state'
import {ILoggedInState, initialLoggedInState} from './loggedIn.state'
import { INewCommentsState, initialINewCommentsState } from './newComment.state'
import { IIsSearchingState, initialIsSearchingState} from './isSearching.state'
import { IFilteredBlogsState,initialFilteredBlogsState } from './filteredBlogs.state'
import { ILoadingState, initialLoadingState } from './loading'
import {initialSuccessMessageState, ISuccessMessageState} from './successMessage.state'

export interface IAppState {
    blogs: IBlogsState,
    comments: ICommentsState,
    loggedIn: ILoggedInState,
    newComments: INewCommentsState,
    isSearching: IIsSearchingState,
    filteredBlogs: IFilteredBlogsState,
    loading: ILoadingState,
    successMessage: ISuccessMessageState
}

export const InitialAppState: IAppState = {
    blogs: initialIBlogsState,
    comments: initialCommentsState,
    loggedIn: initialLoggedInState,
    newComments: initialINewCommentsState,
    isSearching: initialIsSearchingState,
    filteredBlogs: initialFilteredBlogsState,
    loading: initialLoadingState,
    successMessage: initialSuccessMessageState
}