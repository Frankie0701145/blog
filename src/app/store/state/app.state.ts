
import {IBlogsState, initialIBlogsState} from './blogs.state'
import {ICommentsState, initialCommentsState} from './comments.state'
import {ILoggedInState, initialLoggedInState} from './loggedIn.state'
import { IIsSearchingState, initialIsSearchingState} from './isSearching.state'
import { IFilteredBlogsState,initialFilteredBlogsState } from './filteredBlogs.state'
import { ILoadingState, initialLoadingState } from './loading'
import {initialSuccessMessageState, ISuccessMessageState} from './successMessage.state'

/**interface for the application state*/
export interface IAppState {
    blogs: IBlogsState,
    comments: ICommentsState,
    loggedIn: ILoggedInState,
    isSearching: IIsSearchingState,
    filteredBlogs: IFilteredBlogsState,
    loading: ILoadingState,
    successMessages: ISuccessMessageState
}

/**the initial state for the application state*/
export const InitialAppState: IAppState = {
    blogs: initialIBlogsState,
    comments: initialCommentsState,
    loggedIn: initialLoggedInState,
    isSearching: initialIsSearchingState,
    filteredBlogs: initialFilteredBlogsState,
    loading: initialLoadingState,
    successMessages: initialSuccessMessageState
}