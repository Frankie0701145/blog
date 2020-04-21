import { ISuccessMessage } from 'src/app/models/successMessage.interface';

export interface ISuccessMessageState {
    successMessage: ISuccessMessage[]
}

export const initialSuccessMessageState: ISuccessMessageState = {
    successMessage: []
}