/**For selecting the comments portion of the state*/
import { IAppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';
import { ICommentsState } from '../state/comments.state';

/**Select the comments from the state*/
const selectComments = (state: IAppState)=> state.comments;

export const selectCommentList = createSelector(
    selectComments,
    /**Select the comments property from the comments*/
    (comments: ICommentsState)=> comments.comments
); 