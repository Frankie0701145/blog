import {IBlog} from '../../models/blog.interface'

/**interface for the filteredBlogsState*/
export interface IFilteredBlogsState {
    filteredBlogs: IBlog[]
} 

/**initial state for the filteredBlogs*/
export const initialFilteredBlogsState: IFilteredBlogsState = {
    filteredBlogs: []
}
