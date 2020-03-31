import { Action } from '@ngrx/store';

/**The filteredBlogs constant names */
export enum EIsSearchingActions {
    Searching= '[Navbar] Searching',
    StopSearching = '[Navbar] Stop Searching',

}

/**Searching Action */
export class Searching implements Action {
    public readonly type = EIsSearchingActions.Searching
    
}

/**Stop Searching Action */
export class StopSearching implements Action {
    public readonly type = EIsSearchingActions.StopSearching
}

/**The Searching Actions Type */
export type SearchingActions = Searching  | StopSearching