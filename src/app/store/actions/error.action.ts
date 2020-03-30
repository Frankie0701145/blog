import { Action } from '@ngrx/store';
import {IErrorMessage} from '../../models/errorMessage.interface';

export enum EErrorActions {
    GetErrors = '[Error] Get Errors',
    RemoveErrors = '[Error] Remove Errors',
    AddErrors = '[Error] Add Errors'
}

export class GetErrors implements Action {
    public readonly type = EErrorActions.GetErrors
    constructor(public payload: IErrorMessage[] ){}
}

export class RemoveErrors implements Action {
    public readonly type = EErrorActions.RemoveErrors
}

export class AddErrors implements Action {
    public readonly type = EErrorActions.AddErrors
    constructor(public payload:IErrorMessage ){}
}



export type ErrorActions = GetErrors | RemoveErrors | AddErrors