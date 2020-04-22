/**For selecting the loggedIn portion of the state*/

import { IAppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';
import { ILoggedInState } from '../state/loggedIn.state';

/**select the loggedIn from the state*/
const selectLoggedInFn = (state: IAppState)=> state.loggedIn;

/**Used to select the loggedIn state*/
export const selectLoggedIn = createSelector(
    selectLoggedInFn,
    /**select the loggedIn property from loggedIn*/
    (loggedIn: ILoggedInState)=> loggedIn.loggedIn
); 