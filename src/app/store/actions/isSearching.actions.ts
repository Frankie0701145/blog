import { Action } from '@ngrx/store';


export enum EIsSearchingActions {
    Searching= '[Navbar] Searching',
    StopSearching = '[Navbar] Stop Searching',

}

export class Searching implements Action {
    public readonly type = EIsSearchingActions.Searching
    
}

export class StopSearching implements Action {
    public readonly type = EIsSearchingActions.StopSearching
}

export type SearchingActions = Searching  | StopSearching