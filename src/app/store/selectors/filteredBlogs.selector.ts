/**For selecting the filteredBlogs portion of the state*/
import {createSelector} from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IFilteredBlogsState} from '../state/filteredBlogs.state';

/**Select the filteredBlogs from the state*/
const selectBlogs = (state: IAppState)=> state.filteredBlogs;

/**Used to select the filteredBlogs state*/
export const selectFilteredBlogList = createSelector(
    selectBlogs,
    /**Select the filteredBlogs property from the filteredBlogs*/
    (filteredBlogs: IFilteredBlogsState)=> filteredBlogs.filteredBlogs
); 