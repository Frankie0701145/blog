
import {IBlog} from '../../models/blog.interface'

export interface INewBlogsState {
    newBlogs: IBlog[]
} 

export const initialINewBlogsState: INewBlogsState = {
    newBlogs: []
}