import { IComment } from 'src/app/models/comment.interface'

/**Interface for the newComments State*/
export interface INewCommentsState {
    newComments: IComment[]
} 

/**initial state for the newComments*/
export const initialINewCommentsState: INewCommentsState = {
    newComments: []
}