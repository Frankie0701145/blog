/**Reducer for loading state*/

import { initialLoadingState, ILoadingState } from '../state/loading';
import { LoadingActions, ELoadingActions } from '../actions/loading.actions';

/**
 * @param state
 * @param {LoadingActions} action
*/
export function loadingReducer(
    state=initialLoadingState,
    action: LoadingActions
): ILoadingState {
    switch(action.type){
        /**Handle StartLoading Action*/
        case ELoadingActions.StartLoading:
            /**Toggle the loading to true*/
            return {
                ...state,
                loading: true
            }
        /**Handle StopLoading Action*/
        case ELoadingActions.StopLoading:
            /**Toggle the loading to false*/
            return {
                ...state,
                loading: false
            }
        /**Return the default state of loading for*/
        default:
            return {
                ...state,
                loading: false
            }
    }
}