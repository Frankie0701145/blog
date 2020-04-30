/**
 * Definition of the SuccessMessageActions
*/
import { Action } from '@ngrx/store';
import { ISuccessMessage } from 'src/app/models/successMessage.interface';

/**
 * @enum {string}
 * The action constants for the successMessage actions
*/

export enum ESuccessMessage {
    AddSuccessMessage = "[Success Message] Add Success Message",
    RemoveSuccessMessages = "[Success Message] Remove Success Message"
}

/**
 * @class
 * @implements {Action}
 * Add success message to the successMessages state
*/
export class AddSuccessMessage implements Action {
    /**
     *  Holds the action type constant
    */
    public readonly type = ESuccessMessage.AddSuccessMessage
    /**
     * Add success message to the successMessages state
     * @param {ISuccessMessage} payload - Payload object that contains the message property
     * @param {string} payload.message - The success message
    */
    constructor( public payload: ISuccessMessage){}
}

/** 
 * @class
 * @implements {Action}
 * Remove success messages from the state
*/
export class RemoveSuccessMessages implements Action {
    /**
     *  Holds the action type constant
    */
    public readonly type = ESuccessMessage.RemoveSuccessMessages
}

export type SuccessMessageAction = AddSuccessMessage | RemoveSuccessMessages;