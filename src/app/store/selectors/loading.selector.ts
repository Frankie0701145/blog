/**for selecting the loading portion of the state*/
import {createSelector} from '@ngrx/store';
import { ILoadingState } from '../state/loading';

/**Select the loading from the state*/
const selectLoading =  (state)=> state.loading;

export const selectLoadingState = createSelector(
    selectLoading,
    /**Select the loading property from the loading*/
    (loading: ILoadingState) => loading.loading
)