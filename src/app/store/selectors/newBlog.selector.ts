import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { INewBlogsState } from '../state/new.state';


const selectBlogs = (state: IAppState)=> state.newBlogs;

export const selectNewBlogList = createSelector(
    selectBlogs,
    (state: INewBlogsState)=> state.newBlogs
); 