import { initialSuccessMessageState } from '../state/successMessage.state';
import { SuccessMessageAction, ESuccessMessage } from '../actions/successMessage.action';


export function successMessageReducer(
    state=initialSuccessMessageState,
    action: SuccessMessageAction
){
    switch(action.type){
        case ESuccessMessage.AddSuccessMessage:
            return {
                ...state,
                successMessages: [action.payload, ...state.successMessages]
            }
        case ESuccessMessage.RemoveSuccessMessages:
            return {
                ...state,
                successMessages: []
            }
        default:
            return state
    }
}