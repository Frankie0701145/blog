import { ISuccessMessage } from 'src/app/models/successMessage.interface';

/**Interface for the successMessages*/
export interface ISuccessMessageState {
    successMessages: ISuccessMessage[]
}

/**initial state for the successMessages*/

export const initialSuccessMessageState: ISuccessMessageState = {
    successMessages: []
}