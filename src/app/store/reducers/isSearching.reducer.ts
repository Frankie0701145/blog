/**Reducer for the isSearching state*/
import {initialIsSearchingState, IIsSearchingState} from '../state/isSearching.state';
import {SearchingActions, EIsSearchingActions } from '../actions/isSearching.actions'

/**
 * @param state
 * @param {SearchingActions} action
*/
export function isSearchingReducer(state= initialIsSearchingState, action:SearchingActions): IIsSearchingState{
    switch(action.type){
        /**handling the Searching action */
        case EIsSearchingActions.Searching:
            /**Toggle the isSearching to true*/
                return {
                    ...state,
                    isSearching: true
                }
         /**Handling stopSearching action*/
        case EIsSearchingActions.StopSearching:
            /**Toggle the isSearching to false*/
            return {
                ...state,
                isSearching: false
            }
        /**Return the initialIsSearching state*/
        default:
            return state
    }
}