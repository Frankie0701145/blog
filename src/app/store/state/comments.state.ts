import {IComment} from '../../models/comment.interface'

/**Interface for the comments State*/
export interface ICommentsState {
    comments: IComment[];
}

/**initial comments state*/
export const initialCommentsState: ICommentsState = {
    comments: []
}