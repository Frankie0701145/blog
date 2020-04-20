/**for selecting the loading portion of the state*/
import {createSelector} from '@ngrx/store';
import { ILoadingState } from '../state/loading';

const selectLoading =  (state)=> state.loading;

export const selectLoadingState = createSelector(
    selectLoading,
    (state: ILoadingState) => state.loading
)