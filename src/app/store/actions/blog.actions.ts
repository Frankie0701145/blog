/**
 * The Blog Actions
*/

import { Action } from '@ngrx/store';
import {IBlog} from '../../models/blog.interface';
import { IBlogEditProperties } from 'src/app/models/editBlog.interface';

/**
 * The constants for the blog actions
 * @enum {string}
*/
export enum EBlogActions {
    GetBlogs = '[Blogs] Get Blogs',
    GetBlogsSuccess = '[Blogs] Get Blogs Success',
    GetBlogsError = '[Blogs] Get Blogs Error',
    CreateBlog = '[Add Blog] Create Blog',
    CreateBlogSuccess = '[Add Blog] Create Blog Success',
    CreateBlogError = '[Add Blog] Create Blog Error',
    EditBlog = '[Blogs] Edit Blog',
    EditBlogSuccess = '[Blogs] Edit Blog Success',
    AddBlogCommentNumber = '[Blogs] Add Comment Number',
    DeleteBlog = '[Blogs] Delete Blog',
    DeleteBlogSuccess = '[Blogs] Delete Blog success'
}

/**
 * @class
 * @implements {Action}
 * A GetBlogs Action class that implements Action
 * The GetBlogs Action. Action for retrieving blogs from the server which will be handle by getBlogs$ effect.
*/
export class GetBlogs implements Action {
    /**
     * Holds the action type constant
    */
    public readonly type = EBlogActions.GetBlogs
}

/** 
 * @class
 * @implements {Action}
 * A GetBlogsSuccess Action class that implements Action
 * The GetBlogs Success. Action to be triggered after a successful GetBlogs Action.
 * Adds the blog state
*/
export class GetBlogsSuccess implements Action {
    /**
     * Holds the action type constant
    */
    public readonly type = EBlogActions.GetBlogsSuccess
    /**
     * @param {IBlog} payload - The payload contains blog properties and value
    */ 
    constructor(public payload: IBlog[]){}
}

/** 
 * @class
 * @implements {Action}
 * A CreateBlog Action class that implements Action
 * The CreateBlog Action. Action for creating blogs on the server which will be handled by postBlogs$ effect.
*/
export class CreateBlog implements Action {
    /**
     * Holds the action type constant
    */
    public readonly type = EBlogActions.CreateBlog
    /**
     *  The CreateBlog Action. Action for creating blogs on the server which will be handled by postBlogs$ effect.
     *@param {IBlog} payload - The payload contains blog properties and value
    */
    constructor(public payload: IBlog){}
}

/** 
 * @class
 * @implements {Action}
 * A CreateBlogSuccess Action class that implements Action
 * The CreateBlogSuccess Action. Action to be triggered after a successful CreateBlog.
 * Adds a new blog to the blog state
*/
export class CreateBlogSuccess implements Action {
    /**
     * Holds the action type constant
    */
    public readonly type = EBlogActions.CreateBlogSuccess
    /**
     *@param {IBlog} payload - The payload contains blog properties and value
    */
    constructor(public payload: IBlog){}
}

/**
 * @class
 * @implements {Action}
 * A EditBlog Action class that implements Action
 * Edit Blog Action. Action for editing the blogs on the server which will be handled by  editBlog$ effect.
*/
export class EditBlog implements Action {
    /**
     * Holds the action type constant
    */
    public readonly type = EBlogActions.EditBlog
    /**
     * Edit Blog Action. Action for editing the blogs on the server which will be handled by  editBlog$ effect.
     * @param {blogId: string, blogProperties: IBlogEditProperties} payload - The payload contains the blogId and  Properties and values that are going to change on a blog.
     * @param {string} payload.blogId - The blogId to retrieve the blog that is to be edited
     * @param {IBlogEditProperties} payload.blogProperties - Properties and values that are going to change on a blog.
    */
    constructor( public payload: {blogId: string, blogProperties: IBlogEditProperties}){}
}

/** 
 * @class
 * @implements {Action}
 * A EditBlogSuccess Action class that implements Action
 * The EditBlogSuccess Action. Action to be triggered after a successful EditBlog.
 * Edits the blogs in the state
*/
export class EditBlogSuccess implements Action {
    /**
     * Holds the action type constant
    */
    public readonly type = EBlogActions.EditBlogSuccess
    /**
     * The EditBlogSuccess Action. Action to be triggered after a successful EditBlog.
     * Edits the blogs in the state
     * @param {blogId: string, blogProperties: IBlogEditProperties} payload - The payload contains the blogId and  Properties and values that are going to change on a blog.
     * @param {string} payload.blogId - The blogId to retrieve the blog that is to be edited
     * @param {IBlogEditProperties} payload.blogProperties - Properties and values that are going to change on a blog.
    */
    constructor( public payload: { blogId: string, blogProperties: IBlogEditProperties}){}
}

/**
 * @class
 * @implements {Action}
 * Adds Comment Number of a blog after a successful CreateCommentSuccess Action
*/
export class AddBlogCommentNumber implements Action {
    /**
     * Holds the action type constant
    */
    public readonly type = EBlogActions.AddBlogCommentNumber
    /**
     * @param {blogId: string}
     * Adds Comment Number of a blog after a successful CreateCommentSuccess Action
    */
    constructor (public payload: {blogId: string}){}
}

/**
 * @class
 * @implements {Action}
 * Delete Blog Action. Action for deleting the blogs on the server which will be handled by deleteBlog$ effect.
*/

export class DeleteBlog implements Action {
    /**
     * Holds the action type constant
    */
    public readonly type = EBlogActions.DeleteBlog
    /**
     * @param {blogId: string} - The blog Id
     * Delete Blog Action. Action for deleting the blogs on the server which will be handled by deleteBlog$ effect.
    */
    constructor(public payload: {blogId: string} ){}
}

/**
 * @class
 * @implements {Action}
 * The DeleteBlogSuccess. Action to be triggered after a successful deleteBlog action.
*/
export class DeleteBlogSuccess implements Action{
    /**
     * Holds the action type constant
    */
    public readonly type = EBlogActions.DeleteBlogSuccess
    /**
     * @param {blogId: string} - The blog Id
     * The DeleteBlogSuccess. Action to be triggered after a successful deleteBlog action.
    */
    constructor(public payload:{blogId: string}){}
}


/** 
 * The Type for the BlogAction.
*/
export type BlogActions = GetBlogs | GetBlogsSuccess | CreateBlog | CreateBlogSuccess | EditBlogSuccess | AddBlogCommentNumber | DeleteBlogSuccess;

