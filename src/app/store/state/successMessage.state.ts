import { ISuccessMessage } from 'src/app/models/successMessage.interface';

export interface ISuccessMessageState {
    successMessages: ISuccessMessage[]
}

export const initialSuccessMessageState: ISuccessMessageState = {
    successMessages: []
}