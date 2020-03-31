import { Action } from '@ngrx/store';
import { IBlog } from 'src/app/models/blog.interface';

export enum EFilteredBlogActions {
    SearchBlogs = '[Blogs] Search Blogs',
    RemoveFilteredBlogs = '[Blogs] Remove filteredBlogs',
}

//Filter Blogs
export class FilterBlogs implements Action {
    public readonly type = EFilteredBlogActions.SearchBlogs
    constructor(public payload: {searchText: string, blogs: IBlog[]}){}
}

//Remove Blogs
export class RemoveFilteredBlogs implements Action {
    public readonly type = EFilteredBlogActions.RemoveFilteredBlogs
}

export type FilteredBlogActions  = FilterBlogs | RemoveFilteredBlogs