import { Action } from '@ngrx/store';
import {IBlog} from '../../models/blog.interface';
import { IBlogEditProperty } from 'src/app/models/editBlog.interface';
// import {IErrorMessage} from '../../models/errorMessage.interface';
// import {ISuccessMessage} from '../../models/successMessage.interface'

export enum EBlogActions {
    GetBlogs = '[Blogs] Get Blogs',
    GetBlogsSuccess = '[Blogs] Get Blogs Success',
    GetBlogsError = '[Blogs] Get Blogs Error',
    CreateBlog = '[Add Blog] Create Blog',
    CreateBlogSuccess = '[Add Blog] Create Blog Success',
    CreateBlogError = '[Add Blog] Create Blog Error',
    EditBlog = '[Blogs] Edit Blog',
    BlogById = '[EditBlog] Get Blog By Id'
}

//Get Blogs
export class GetBlogs implements Action {
    public readonly type = EBlogActions.GetBlogs
}

export class GetBlogsSuccess implements Action {
    public readonly type = EBlogActions.GetBlogsSuccess
    constructor(public payload: IBlog[]){}
}

//Create Blog
export class CreateBlog implements Action {
    public readonly type = EBlogActions.CreateBlog
    constructor(public payload: IBlog){}
}
export class CreateBlogSuccess implements Action {
    public readonly type = EBlogActions.CreateBlogSuccess
    constructor(public payload: IBlog){}
}

//Edit Blog
export class EditBlogSuccess implements Action {
    public readonly type = EBlogActions.EditBlog
    constructor( public payload: {blogId: string, blogProperty: IBlogEditProperty}){}
}
//Get Blog By Id
export class BlogById implements Action {
    public readonly type = EBlogActions.BlogById
    constructor(public payload: string){}
}


export type BlogActions = GetBlogs | GetBlogsSuccess | CreateBlog | CreateBlogSuccess | EditBlogSuccess | BlogById;

