/**Reducer for loading state*/

import { initialLoadingState, ILoadingState } from '../state/loading';
import { LoadingActions, ELoadingActions } from '../actions/loading.actions';

export function loadingReducer(
    state=initialLoadingState,
    action: LoadingActions
): ILoadingState {
    switch(action.type){
        case ELoadingActions.StartLoading:
            return {
                ...state,
                loading: true
            }
        case ELoadingActions.StopLoading:
            return {
                ...state,
                loading: false
            }
    }
}