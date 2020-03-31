import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { CommentsComponent } from './comments/comments.component';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetBlogs } from 'src/app/store/actions/blog.actions';
import { selectBlogList } from 'src/app/store/selectors/blog.selector';
import { selectNewBlogList } from 'src/app/store/selectors/newBlog.selector';
import {selectFilteredBlogList } from 'src/app/store/selectors/filteredBlogs.selector'
import {  RemoveComments } from 'src/app/store/actions/comment.actions';
import { selectIsSearching } from 'src/app/store/selectors/isSearching.selector';
import { selectLoggedIn } from 'src/app/store/selectors/loggedIn.selector';
import { Observable } from 'rxjs';
import { IBlog } from 'src/app/models/blog.interface';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent implements OnInit {
  /**The blogs observable to retrieve the blogs from the state*/ 
  blogs$: Observable<IBlog[]> = this._store.pipe(select(selectBlogList));
  /**The newBlogs observable to retrieve the  newBlogs from the state*/
  newBlogs$: Observable<IBlog[]> = this._store.pipe(select(selectNewBlogList));
  /**The filteredBlogs observable to retrieve the filteredBlogs from the state*/
  filteredBlog$: Observable<IBlog[]> = this._store.pipe(select(selectFilteredBlogList ))
  /**Property to keep track when the user is searching */
  isSearching: boolean;
  /**Property to check the loggedIn state*/
  loggedIn: boolean;
  constructor(
    /**Inject the dialog from MatDialog*/
    private dialog: MatDialog,
    /**injects the store*/
    private _store: Store<IAppState>
  ) {
    /**Set the isSearching property to that of isSearching from the state*/
    this._store.pipe(select(selectIsSearching)).subscribe((isSearching)=>{
      console.log(isSearching)
      this.isSearching = isSearching
    })
    /**Set the loggedIn property to that of the loggedIn from the state*/
    this._store.pipe(select(selectLoggedIn)).subscribe((loggedIn)=>{
      this.loggedIn = loggedIn
    })
  }

  ngOnInit() {
    /**dispatch the GeBlogs action to fetch blogs*/
    this._store.dispatch(new GetBlogs());
 
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
