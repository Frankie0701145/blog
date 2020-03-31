/**For selecting the comments portion of the state*/
import { IAppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';
import { ICommentsState } from '../state/comments.state';


const selectComments = (state: IAppState)=> state.comments;

export const selectCommentList = createSelector(
    selectComments,
    (state: ICommentsState)=> state.comments
); 