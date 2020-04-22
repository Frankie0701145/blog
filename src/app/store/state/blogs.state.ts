import {IBlog} from '../../models/blog.interface'

/**Interface of the blogs state*/
export interface IBlogsState {
    blogs: IBlog[]
} 

/**Initial state for the blogs state*/
export const initialIBlogsState: IBlogsState = {
    blogs: []
}