import {initialErrorMessageState, IErrorMessagesState} from '../state/errors.state';
import {ErrorActions, EErrorActions} from '../actions/error.action'

export const errorsReducer = (
    state= initialErrorMessageState, 
    action: ErrorActions
): IErrorMessagesState=>{
    switch(action.type){
        case EErrorActions.AddErrors:
            return {
                ...state,
                errors: [...state.errors, action.payload]
            }
        default:
            return state
    }
}