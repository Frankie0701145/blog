/**For selecting the newComments portion of the state*/

import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import {INewCommentsState} from '../state/newComment.state'

/**Select the newComments from the state*/
const selectNewComments = (state: IAppState)=> state.newComments;

/**Used to select the newComments state*/
export const selectNewCommentList = createSelector(
    selectNewComments ,
    /**Select the newComments property from the newComments*/
    (state: INewCommentsState)=> state.newComments
); 