import { Action } from '@ngrx/store';
import {IBlog} from '../../models/blog.interface';
// import {IErrorMessage} from '../../models/errorMessage.interface';
// import {ISuccessMessage} from '../../models/successMessage.interface'

export enum EBlogActions {
    GetBlogs = '[Blogs] Get Blogs',
    GetBlogsSuccess = '[Blogs] Get Blogs Success',
    GetBlogsError = '[Blogs] Get Blogs Error',
    CreateBlog = '[Add Blog] Create Blog',
    CreateBlogSuccess = '[Add Blog] Create Blog Success',
    CreateBlogError = '[Add Blog] Create Blog Error'
}

//Get Blogs
export class GetBlogs implements Action {
    public readonly type = EBlogActions.GetBlogs
}

export class GetBlogsSuccess implements Action {
    public readonly type = EBlogActions.GetBlogsSuccess
    constructor(public payload: IBlog[]){}
}
// export class GetBlogsError implements Action {
//     public readonly type = EBlogActions.GetBlogsError
//     constructor(public payload: IErrorMessage){}
// }

//Create Blog
export class CreateBlog implements Action {
    public readonly type = EBlogActions.CreateBlog
    constructor(public payload: IBlog){}
}
export class CreateBlogSuccess implements Action {
    public readonly type = EBlogActions.CreateBlogSuccess
    constructor(public payload: IBlog){}
}
// export class CreateBlogError implements Action {
//     public readonly type = EBlogActions.CreateBlogError
//     constructor(public payload: IErrorMessage){}
// }

export type BlogActions = GetBlogs | GetBlogsSuccess | CreateBlog | CreateBlogSuccess;

