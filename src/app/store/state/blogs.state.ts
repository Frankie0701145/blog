import {IBlog} from '../../models/blog.interface'

export interface IBlogState {
    blogs: IBlog[]
} 

export const initialIBlogState = {
    blogs: []
}