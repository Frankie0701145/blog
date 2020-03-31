import { IComment } from 'src/app/models/comment.interface'

export interface INewCommentsState {
    newComments: IComment[]
} 

export const initialINewCommentsState: INewCommentsState = {
    newComments: []
}