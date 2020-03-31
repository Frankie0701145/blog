import {initialIsSearchingState, IIsSearchingState} from '../state/isSearching.state';
import {SearchingActions, EIsSearchingActions } from '../actions/isSearching.actions'

export const isSearchingReducer = (
    state= initialIsSearchingState, 
    action:SearchingActions
): IIsSearchingState=>{
    switch(action.type){
        case EIsSearchingActions.Searching:
                return {
                    ...state,
                    isSearching: true
                }
        case EIsSearchingActions.StopSearching:
            return {
                ...state,
                isSearching: false
            }
        default:
            return state
    }
}