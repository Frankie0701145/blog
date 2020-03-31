/**The Add New Blog Action*/
import { IBlog } from 'src/app/models/blog.interface'
import { Action } from '@ngrx/store';

/**The Add New Blog Constant Names*/
export enum ENewBlogActions {
    AddNewBlog = '[Add Blog] Add New Blog Success'
}

/**The Add New Blog Action*/
export class AddNewBlog implements Action {
    public readonly type = ENewBlogActions.AddNewBlog
    constructor(public payload: IBlog){}
}

/**The NewBlogActions type*/
export type NewBlogActions = AddNewBlog