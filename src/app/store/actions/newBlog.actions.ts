import { IBlog } from 'src/app/models/blog.interface'
import { Action } from '@ngrx/store';

export enum ENewBlogActions {
    AddNewBlog = '[Add Blog] Add New Blog Success'
}

export class AddNewBlog implements Action {
    public readonly type = ENewBlogActions.AddNewBlog
    constructor(public payload: IBlog){}
}

export type NewBlogActions = AddNewBlog