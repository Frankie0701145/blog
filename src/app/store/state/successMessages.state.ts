import {ISuccessMessage} from '../../models/successMessage.interface'

export interface ISuccessMessagesState {
    successMessages: ISuccessMessage[]
}

export const initialSuccessMessagesState: ISuccessMessagesState ={
    successMessages:[]
}