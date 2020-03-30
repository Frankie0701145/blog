import { IAppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';
import { ILoggedInState } from '../state/loggedIn.state';


const selectLoggedInFn = (state: IAppState)=> state.loggedIn;

export const selectLoggedIn = createSelector(
    selectLoggedInFn,
    (state: ILoggedInState)=> state.loggedIn
); 