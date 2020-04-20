import { Action } from '@ngrx/store';

/**Enum for the actions*/
export enum ELoadingActions {
    StartLoading = "[Loading] Start Loading",
    StopLoading = "[Loading] Stop Loading"
}

/**The start loading action*/
export class StartLoading implements Action {
    public readonly type = ELoadingActions.StartLoading
}

/**Stop loading action*/
export class StopLoading implements Action {
    public readonly type = ELoadingActions.StopLoading
}

/**The type for the loadingAction*/

export type LoadingActions = StartLoading | StopLoading;
