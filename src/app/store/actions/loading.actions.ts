import { Action } from '@ngrx/store';

/**
 * @enum {string}
 * Constant names for the loading Action
*/
export enum ELoadingActions {
    StartLoading = "[Loading] Start Loading",
    StopLoading = "[Loading] Stop Loading"
}

/**
 * @class 
 * @implements {Action}
 * The StartLoading Action class.
 * Toggles the searching state to true
*/
export class StartLoading implements Action {
    /**
     *  Holds the action type constant
    */
    public readonly type = ELoadingActions.StartLoading
}

/**
 * @class
 * @implements {Action}
 * Toggles the searching state to false
 * Stop loading action
*/
export class StopLoading implements Action {
    /**
     *  Holds the action type constant
    */
    public readonly type = ELoadingActions.StopLoading
}

/**The type for the loadingAction*/

export type LoadingActions = StartLoading | StopLoading;
