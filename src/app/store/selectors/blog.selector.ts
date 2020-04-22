/**For selecting the blogs portion of the state*/
import {createSelector} from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IBlogsState } from '../state/blogs.state';

/**Select the blogs from the state*/
const selectBlogs = (state: IAppState)=> state.blogs;

export const selectBlogList = createSelector(
    selectBlogs,
    /**Select the blogs property from the blogs*/
    (blogs: IBlogsState)=> blogs.blogs
); 