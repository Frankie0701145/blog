/**For selecting the successMessage portion of the state*/
import {createSelector} from '@ngrx/store';
import { IAppState } from '../state/app.state';
import {ISuccessMessageState} from '../state/successMessage.state'

const selectSuccessMessage = (state: IAppState)=> state.successMessages

export const selectSuccessMessageList = createSelector(
    selectSuccessMessage,
    (state: ISuccessMessageState)=> state.successMessages
)