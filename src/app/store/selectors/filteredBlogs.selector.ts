/**For selecting the filteredBlogs portion of the state*/
import {createSelector} from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IFilteredBlogsState} from '../state/filteredBlogs.state';

const selectBlogs = (state: IAppState)=> state.filteredBlogs;

export const selectFilteredBlogList = createSelector(
    selectBlogs,
    (state: IFilteredBlogsState)=> state.filteredBlogs
); 