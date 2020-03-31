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
import { errorsReducer } from './errors.reducer';
import {loginReducer} from './login.reducers'
import {IAppState} from '../state/app.state';
import { newBlogReducer } from './newBlog.reducer';
import { newCommentReducer } from './newComment.reducer';

//errors, personnel, successMessages, loggedIn

export const appReducers: ActionReducerMap<IAppState> = {
    blogs: blogsReducer,
    comments: commentsReducer,
    errors: errorsReducer,
    loggedIn: loginReducer,
    newBlogs: newBlogReducer,
    newComments: newCommentReducer
};


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
