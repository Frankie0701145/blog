import { IAppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';
import { IIsSearchingState } from '../state/isSearching.state';


const selectLoggedInFn = (state: IAppState)=> state.isSearching;

export const selectIsSearching = createSelector(
    selectLoggedInFn,
    (state: IIsSearchingState)=> state.isSearching
); 