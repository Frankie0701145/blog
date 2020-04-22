/**For selecting the isSearching portion of the state*/

import { IAppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';
import { IIsSearchingState } from '../state/isSearching.state';

/**Select the isSearching from the state*/
const selectLoggedInFn = (state: IAppState)=> state.isSearching;

export const selectIsSearching = createSelector(
    selectLoggedInFn,
    /**Select the isSearching property from the isSearching*/
    (isSearching: IIsSearchingState)=> isSearching.isSearching
); 