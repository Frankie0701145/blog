/**For selecting the blogs portion of the state*/
import {createSelector} from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IBlogsState } from '../state/blogs.state';

const selectBlogs = (state: IAppState)=> state.blogs;

export const selectBlogList = createSelector(
    selectBlogs,
    (state: IBlogsState)=> state.blogs
); 