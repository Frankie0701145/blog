/**
 * FilteredBlogActions
 * The filtering of Blog Actions
*/

import { Action } from '@ngrx/store';
import { IBlog } from 'src/app/models/blog.interface';

/**
 * The filteredBlogs constant Action names 
 * @enum {string}
*/
export enum EFilteredBlogActions {
    SearchBlogs = '[Blogs] Search Blogs',
    RemoveFilteredBlogs = '[Blogs] Remove filteredBlogs',
    DeleteFilteredBlogsSuccess = '[Blogs] Delete Filtered Blogs by Id'
}

/**
 * @class
 * @implements {Action}
 * Filter Blogs Action. Used to select blogs that match the search text and add the result to the filterBlogs state.
*/
export class FilterBlogs implements Action {
    /**
     *  Holds the action type constant
    */
    public readonly type = EFilteredBlogActions.SearchBlogs
    /**
     * Filter Blogs Action. Used to select blogs that match the search text and add the result to the filterBlogs state.
     * @param {searchText: string, blogs: IBlog[]} payload
     * @param {string} payload.searchText - Contains a string used to search for blogs by the title
     * @param {IBLog} payload.blog - Contains blogs that are to be searched.
    */
    constructor(public payload: {searchText: string, blogs: IBlog[]}){}
}

/**
 * @class
 * @implements {Action}
 * Remove the blogs in the filteredBlog state
*/
export class RemoveFilteredBlogs implements Action {
    /**
     *  Holds the action type constant
    */
    public readonly type = EFilteredBlogActions.RemoveFilteredBlogs
}

/**
 * @class
 * @implements {Action}
 * The DeleteFilteredBlogSuccess. Action to be triggered after a successful deleteSuccessBlog action.
*/
export class DeleteFilteredBlogSuccess implements Action{
    /**
     * Holds the action type constant
    */
    public readonly type = EFilteredBlogActions.DeleteFilteredBlogsSuccess
    /**
     * @param {blogId: string} - The blog Id
     * The DeleteBlogSuccess. Action to be triggered after a successful deleteBlog action.
    */
    constructor(public payload:{blogId: string}){}
}

/**The filtered Blog Actions Type */
export type FilteredBlogActions  = FilterBlogs | RemoveFilteredBlogs | DeleteFilteredBlogSuccess