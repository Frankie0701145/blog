import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { CommentsComponent } from './comments/comments.component';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectBlogList } from 'src/app/store/selectors/blog.selector';
import {selectFilteredBlogList } from 'src/app/store/selectors/filteredBlogs.selector'
import { selectIsSearching } from 'src/app/store/selectors/isSearching.selector';
import { selectLoggedIn } from 'src/app/store/selectors/loggedIn.selector';
import { Observable } from 'rxjs';
import { IBlog } from 'src/app/models/blog.interface';
import { selectSuccessMessageList } from 'src/app/store/selectors/successMessage.selector';
import { ISuccessMessage } from 'src/app/models/successMessage.interface';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RemoveSuccessMessages } from 'src/app/store/actions/successMessage.action';
import { DeleteBlogSuccess, DeleteBlog } from 'src/app/store/actions/blog.actions';
import { selectLoadingState } from 'src/app/store/selectors/loading.selector';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
/**
 * @class
 * @implements {OnInit}
*/
export class BlogsComponent implements OnInit {
  /**The blogs observable for retrieving the blogs from the state*/ 
  blogs$: Observable<IBlog[]> = this._store.pipe(select(selectBlogList));
  /**The filteredBlogs observable for retrieving the filteredBlogs from the state*/
  filteredBlog$: Observable<IBlog[]> = this._store.pipe(select(selectFilteredBlogList ))
  /**Variable to keep track when the user is searching */
  isSearching: boolean;
  /**Variable to check the loggedIn state*/
  loggedIn: boolean;
  /**Retrieve the loading state from the store*/
  loading$: Observable<boolean> = this._store.pipe(select(selectLoadingState));
  
  constructor(
    /**Inject the dialog from MatDialog*/
    private dialog: MatDialog,
    /**injects the store*/
    private _store: Store<IAppState>,
    /**inject the snack bar*/
    private _snackBar: MatSnackBar
  ) {
    /**Set the isSearching value to that of isSearching from the state*/
    this._store.pipe(select(selectIsSearching)).subscribe((isSearching)=>{
      this.isSearching = isSearching
    })
    /**Set the loggedIn value to that of the loggedIn from the state*/
    this._store.pipe(select(selectLoggedIn)).subscribe((loggedIn)=>{
      this.loggedIn = loggedIn
    })
    /**subscribe to the successMessages state*/
    this._store.pipe(select(selectSuccessMessageList)).subscribe((successMessages)=>{
        /**if there is a successMessage*/
        if(successMessages.length > 0){
          /**open up the snack bar with the success message*/
          this._snackBar.open(successMessages[0].message, 'x',{
               duration:2000,
               verticalPosition: 'bottom',
               horizontalPosition: 'right'
          });
          /**clear the success messages state*/
          this._store.dispatch(new RemoveSuccessMessages());
        }
    });
  }

  ngOnInit() {
 
  }
  
  /**
   * @param {string} blogId
   * Function to open and initialize the matDialog. The matDialog will contain comments
  */
  openCommentDialog(blogId: string){
    /**Initialize the MatDialogConfig*/
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.maxHeight = "700px";
    dialogConfig.maxWidth = "500px";
    // dialogConfig.minHeight = "400px";
    dialogConfig.minWidth = "200px";
    /**Pass the blogId to the component which will be used to retrieve comments*/
    dialogConfig.data = {
        blogId: blogId
    };
    /**Open up the comment dialog*/
    let dialogRef = this.dialog.open(CommentsComponent, dialogConfig);

  }
  /**
   * @param {string} blogId
   * Method to make Http call to delete blog
  */
  deleteBlog(blogId: string): void{
      this._store.dispatch(new DeleteBlog({blogId}));
  }
}
