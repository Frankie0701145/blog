/**The filtering of Blog Actions*/

import { Action } from '@ngrx/store';
import { IBlog } from 'src/app/models/blog.interface';

/**The filteredBlogs constant Action names */
export enum EFilteredBlogActions {
    SearchBlogs = '[Blogs] Search Blogs',
    RemoveFilteredBlogs = '[Blogs] Remove filteredBlogs',
}

/**Filter Blogs Action */
export class FilterBlogs implements Action {
    public readonly type = EFilteredBlogActions.SearchBlogs
    constructor(public payload: {searchText: string, blogs: IBlog[]}){}
}

/**Remove the filtered Blogs Action */
export class RemoveFilteredBlogs implements Action {
    public readonly type = EFilteredBlogActions.RemoveFilteredBlogs
}

/**The filtered Blog Actions Type */
export type FilteredBlogActions  = FilterBlogs | RemoveFilteredBlogs