import { Action } from '@ngrx/store';
import { ISuccessMessage } from 'src/app/models/successMessage.interface';

/**The action constant for the successMessage actions*/

export enum ESuccessMessage {
    AddSuccessMessage = "[Success Message] Add Success Message",
    RemoveSuccessMessages = "[Success Message] Remove Success Message"
}

/**Add success message*/
export class AddSuccessMessage implements Action {
    public readonly type = ESuccessMessage.AddSuccessMessage
    constructor( public payload: ISuccessMessage){}
}

/** Remove success messages*/
export class RemoveSuccessMessages implements Action {
    public readonly type = ESuccessMessage.RemoveSuccessMessages
}

export type SuccessMessageAction = AddSuccessMessage | RemoveSuccessMessages;