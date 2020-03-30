import {IComment} from '../../models/comment.interface'


export interface ICommentsState {
    comments: IComment[];
}

export const initialCommentsState: ICommentsState = {
    comments: []
}