/**For selecting the newBlog portion of the state*/

import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { INewBlogsState } from '../state/newBlog.state';


const selectBlogs = (state: IAppState)=> state.newBlogs;

export const selectNewBlogList = createSelector(
    selectBlogs,
    (state: INewBlogsState)=> state.newBlogs
); 