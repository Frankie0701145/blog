/**The Blog Action*/

import { Action } from '@ngrx/store';
import {IBlog} from '../../models/blog.interface';
import { IBlogEditProperty } from 'src/app/models/editBlog.interface';

/**The action constant for the blog actions*/
export enum EBlogActions {
    GetBlogs = '[Blogs] Get Blogs',
    GetBlogsSuccess = '[Blogs] Get Blogs Success',
    GetBlogsError = '[Blogs] Get Blogs Error',
    CreateBlog = '[Add Blog] Create Blog',
    CreateBlogSuccess = '[Add Blog] Create Blog Success',
    CreateBlogError = '[Add Blog] Create Blog Error',
    EditBlog = '[Blogs] Edit Blog'
}

/**The GetBlogs Action */
export class GetBlogs implements Action {
    public readonly type = EBlogActions.GetBlogs
}

/** The GetBlogs Success*/
export class GetBlogsSuccess implements Action {
    public readonly type = EBlogActions.GetBlogsSuccess
    constructor(public payload: IBlog[]){}
}

/** The CreateBlog Action*/
export class CreateBlog implements Action {
    public readonly type = EBlogActions.CreateBlog
    constructor(public payload: IBlog){}
}

/** The CreateBlogSuccess Action*/
export class CreateBlogSuccess implements Action {
    public readonly type = EBlogActions.CreateBlogSuccess
    constructor(public payload: IBlog){}
}

/** The EditBlogSuccess Action*/
export class EditBlogSuccess implements Action {
    public readonly type = EBlogActions.EditBlog
    constructor( public payload: {blogId: string, blogProperty: IBlogEditProperty}){}
}


/** The Type for the BlogAction*/
export type BlogActions = GetBlogs | GetBlogsSuccess | CreateBlog | CreateBlogSuccess | EditBlogSuccess;

