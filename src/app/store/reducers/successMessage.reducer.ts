import { initialSuccessMessageState } from '../state/successMessage.state';
import { SuccessMessageAction, ESuccessMessage } from '../actions/successMessage.action';

/**
 * @param state 
 * @param {SuccessMessageAction} action
*/

export function successMessageReducer(
    state=initialSuccessMessageState,
    action: SuccessMessageAction
){
    switch(action.type){
        /**Handle the AddSuccessMessage action*/
        case ESuccessMessage.AddSuccessMessage:
            /**Add the successMessage at the beginning of the state*/
            return {
                ...state,
                successMessages: [action.payload, ...state.successMessages]
            }
        /**Handle the RemoveSuccessMessages action*/
        case ESuccessMessage.RemoveSuccessMessages:
            /**Empty the successMessages state*/
            return {
                ...state,
                successMessages: []
            }
        /**return the initialSuccessMessageState when initializing*/
        default:
            return state
    }
}