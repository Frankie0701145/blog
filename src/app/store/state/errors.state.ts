import {IErrorMessage} from '../../models/errorMessage.interface';

export interface IErrorMessagesState {
    errors: IErrorMessage[]
}

export const initialErrorMessageState: IErrorMessagesState ={
    errors: []
}