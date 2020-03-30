import {IBlog} from '../../models/blog.interface'

export interface IBlogsState {
    blogs: IBlog[]
} 

export const initialIBlogsState: IBlogsState = {
    blogs: []
}