/**For selecting the successMessage portion of the state*/
import {createSelector} from '@ngrx/store';
import { IAppState } from '../state/app.state';
import {ISuccessMessageState} from '../state/successMessage.state'

/**Select the successMessages from the state*/
const selectSuccessMessage = (state: IAppState)=> state.successMessages

/**Used to select the successMessages state*/
export const selectSuccessMessageList = createSelector(
    selectSuccessMessage,
    /**Select the successMessages property from the successMessages*/
    (state: ISuccessMessageState)=> state.successMessages
)