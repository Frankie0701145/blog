import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { CommentsComponent } from './comments/comments.component';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectBlogList } from 'src/app/store/selectors/blog.selector';
import {selectFilteredBlogList } from 'src/app/store/selectors/filteredBlogs.selector'
import {  RemoveComments } from 'src/app/store/actions/comment.actions';
import { selectIsSearching } from 'src/app/store/selectors/isSearching.selector';
import { selectLoggedIn } from 'src/app/store/selectors/loggedIn.selector';
import { Observable } from 'rxjs';
import { IBlog } from 'src/app/models/blog.interface';
import { selectSuccessMessageList } from 'src/app/store/selectors/successMessage.selector';
import { ISuccessMessage } from 'src/app/models/successMessage.interface';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RemoveSuccessMessages } from 'src/app/store/actions/successMessage.action';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent implements OnInit {
  /**The blogs observable to retrieve the blogs from the state*/ 
  blogs$: Observable<IBlog[]> = this._store.pipe(select(selectBlogList));
  /**The filteredBlogs observable to retrieve the filteredBlogs from the state*/
  filteredBlog$: Observable<IBlog[]> = this._store.pipe(select(selectFilteredBlogList ))
  /**Property to keep track when the user is searching */
  isSearching: boolean;
  /**Property to check the loggedIn state*/
  loggedIn: boolean;
  /**Success messages array*/
  successMessages: ISuccessMessage[];
  /**property to check if there is success Messages*/
  hasSuccessMessage: boolean= false;
  constructor(
    /**Inject the dialog from MatDialog*/
    private dialog: MatDialog,
    /**injects the store*/
    private _store: Store<IAppState>,
    /**the snack bar*/
    private _snackBar: MatSnackBar
  ) {
    /**Set the isSearching property to that of isSearching from the state*/
    this._store.pipe(select(selectIsSearching)).subscribe((isSearching)=>{
      this.isSearching = isSearching
    })
    /**Set the loggedIn property to that of the loggedIn from the state*/
    this._store.pipe(select(selectLoggedIn)).subscribe((loggedIn)=>{
      this.loggedIn = loggedIn
    })
    /**Set the successMessages property to that of the success from the state*/
    this._store.pipe(select(selectSuccessMessageList)).subscribe((successMessages)=>{
        if(successMessages.length > 0){
          this.hasSuccessMessage = true
          /**open up the snack bar with the success message*/
          this._snackBar.open(successMessages[0].message, 'x',{
               duration:2000,
               verticalPosition: 'bottom',
               horizontalPosition: 'right'
          });
          /**clear the success messages state*/
          this._store.dispatch(new RemoveSuccessMessages());
        }else{
          this.hasSuccessMessage = false;
        }
        this.successMessages = successMessages;
    });
  }

  ngOnInit() {
 
  }
  
  /**Function to open the matDialog and initialize*/
  openCommentDialog(blogId: string){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.maxHeight = "500px";
    dialogConfig.maxWidth = "500px";
    dialogConfig.minHeight = "200px";
    dialogConfig.minWidth = "200px";
    dialogConfig.data = {
        blogId: blogId
    };
    let dialogRef = this.dialog.open(CommentsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result)=>{
        /**After the comment dialog closes dispatch the RemoveComments action to remove the comments*/
        this._store.dispatch(new RemoveComments())
    })
  }

}
