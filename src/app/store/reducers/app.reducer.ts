import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {blogsReducer} from './blogs.reducer';
import { commentsReducer } from './comments.reducer';
import {loginReducer} from './login.reducers'
import {IAppState} from '../state/app.state';
import { newCommentReducer } from './newComment.reducer';
import {isSearchingReducer} from './isSearching.reducer'
import { filterBlogsReducer } from './filteredBlogs.reducer';
import { loadingReducer } from './loading.reducer';
import {successMessageReducer} from './successMessage.reducer'

/**combine all the reducers to one*/
export const appReducers: ActionReducerMap<IAppState> = {
    blogs: blogsReducer,
    comments: commentsReducer,
    loggedIn: loginReducer,
    newComments: newCommentReducer,
    isSearching: isSearchingReducer,
    filteredBlogs: filterBlogsReducer,
    loading: loadingReducer,
    successMessages: successMessageReducer
};


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
