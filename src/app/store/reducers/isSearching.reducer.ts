/**Reducer for the isSearching state*/
import {initialIsSearchingState, IIsSearchingState} from '../state/isSearching.state';
import {SearchingActions, EIsSearchingActions } from '../actions/isSearching.actions'

export function isSearchingReducer(state= initialIsSearchingState, action:SearchingActions): IIsSearchingState{
    switch(action.type){
        /**Case for searching */
        case EIsSearchingActions.Searching:
            /**Turn to true*/
                return {
                    ...state,
                    isSearching: true
                }
         /**Case for stopSearching */
        case EIsSearchingActions.StopSearching:
            /**turn false*/
            return {
                ...state,
                isSearching: false
            }
        default:
            return state
    }
}