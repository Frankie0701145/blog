import {IBlog} from '../../models/blog.interface'

export interface IFilteredBlogsState {
    filteredBlogs: IBlog[]
} 

export const initialFilteredBlogsState: IFilteredBlogsState = {
    filteredBlogs: []
}
