/**For selecting the newComments portion of the state*/

import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { INewBlogsState } from '../state/newBlog.state';
import {INewCommentsState} from '../state/newComment.state'


const selectNewComments = (state: IAppState)=> state.newComments;

export const selectNewBlogList = createSelector(
    selectNewComments ,
    (state: INewCommentsState)=> state.newComments
); 