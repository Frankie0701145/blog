import { Action } from '@ngrx/store';

/**The constant names for IsSearchActions */
export enum EIsSearchingActions {
    Searching= '[Navbar] Searching',
    StopSearching = '[Navbar] Stop Searching',
}

/**
 * @class
 * @implements {Action}
 * Searching Action.
 * The action toggles the search state to true
*/
export class Searching implements Action {
    /**
     *  Holds the action type constant
    */
    public readonly type = EIsSearchingActions.Searching
    
}

/**
 * @class
 * @implements {Action}
 * Stop Searching Action 
 * The action toggles the search state to false
*/
export class StopSearching implements Action {
    /**
     *  Holds the action type constant
    */
    public readonly type = EIsSearchingActions.StopSearching
}

/**The Searching Actions Type */
export type SearchingActions = Searching  | StopSearching